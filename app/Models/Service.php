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
            return str_starts_with($this->image, 'http')
                ? $this->image
                : Storage::disk('public')->url($this->image);
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
            Cache::forget('service_show_'.$service->id);
        };

        static::saved($clearCache);
        static::deleted($clearCache);
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
