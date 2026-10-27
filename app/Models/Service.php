<?php

namespace App\Models;

use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Service extends Model implements HasMedia
{
    /** @use HasFactory<ServiceFactory> */
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = [
        'featured_image_url',
    ];

    public function getFeaturedImageUrlAttribute(): ?string
    {
        $featuredImage = $this->getFirstMediaUrl('featured_image', 'webp')
            ?: $this->getFirstMediaUrl('featured_image');

        if (! $featuredImage && $this->image) {
            $featuredImage = str_starts_with($this->image, 'http') || str_starts_with($this->image, '/')
                ? $this->image
                : Storage::disk('public')->url($this->image);
        }

        if (! $featuredImage && ! empty($this->content_blocks)) {
            foreach ($this->content_blocks as $block) {
                if (($block['type'] ?? '') === 'image' && ! empty($block['data']['image'])) {
                    $img = $block['data']['image'];

                    return str_starts_with($img, 'http') || str_starts_with($img, '/')
                        ? $img
                        : Storage::disk('public')->url($img);
                }
                if (in_array($block['type'] ?? '', ['media_text', 'gallery']) && ! empty($block['data']['images'][0])) {
                    $img = $block['data']['images'][0];

                    return str_starts_with($img, 'http') || str_starts_with($img, '/')
                        ? $img
                        : Storage::disk('public')->url($img);
                }
            }
        }

        return $featuredImage ?: null;
    }

    protected $casts = [
        'content_blocks' => 'array',
    ];

    protected static function booted(): void
    {
        $clearCache = function ($service) {
            Cache::forget('services_index');
            Cache::forget('homepage_services');
            if (isset($service->id)) {
                Cache::forget('service_show_'.$service->id);
            }
        };

        static::saved($clearCache);
        static::deleted($clearCache);

        Media::saved(function (Media $media) {
            if ($media->model_type === Service::class) {
                Cache::forget('services_index');
                Cache::forget('homepage_services');
                Cache::forget('service_show_'.$media->model_id);
            }
        });

        Media::deleted(function (Media $media) {
            if ($media->model_type === Service::class) {
                Cache::forget('services_index');
                Cache::forget('homepage_services');
                Cache::forget('service_show_'.$media->model_id);
            }
        });
    }

    public function registerMediaCollections(): void
    {
        // Single featured / hero image managed by Spatie
        $this->addMediaCollection('featured_image')->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp')
            ->nonQueued();

        $this->addMediaConversion('thumb')
            ->width(800)
            ->format('webp')
            ->nonQueued();
    }
}
