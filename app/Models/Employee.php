<?php

namespace App\Models;

use App\Observers\EmployeeObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

#[ObservedBy(EmployeeObserver::class)]
class Employee extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $casts = [
        'birthday' => 'date',
    ];

    /**
     * Use slug for route model binding.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp')
            ->nonQueued();

        $this->addMediaConversion('profile')
            ->width(640)
            ->format('webp')
            ->nonQueued();

        $this->addMediaConversion('avatar')
            ->width(256)
            ->format('webp')
            ->nonQueued();
    }

    public function getAvatarUrl(): ?string
    {
        $media = $this->getFirstMedia('default');

        if (! $media) {
            return null;
        }

        if ($media->hasGeneratedConversion('avatar')) {
            return $media->getUrl('avatar');
        }

        if ($media->hasGeneratedConversion('webp')) {
            return $media->getUrl('webp');
        }

        return $media->getUrl();
    }

    public function getProfileImageUrl(): ?string
    {
        $media = $this->getFirstMedia('default');

        if (! $media) {
            return null;
        }

        if ($media->hasGeneratedConversion('profile')) {
            return $media->getUrl('profile');
        }

        if ($media->hasGeneratedConversion('webp')) {
            return $media->getUrl('webp');
        }

        return $media->getUrl();
    }

    public function getImageSrcset(): ?string
    {
        $media = $this->getFirstMedia('default');

        if (! $media) {
            return null;
        }

        $entries = [];

        if ($media->hasGeneratedConversion('avatar')) {
            $entries[] = $media->getUrl('avatar').' 256w';
        }

        if ($media->hasGeneratedConversion('profile')) {
            $entries[] = $media->getUrl('profile').' 640w';
        }

        if ($media->hasGeneratedConversion('webp')) {
            $entries[] = $media->getUrl('webp').' 1200w';
        } elseif (count($entries) > 0) {
            $entries[] = $media->getUrl().' 1200w';
        }

        return count($entries) > 1 ? implode(', ', $entries) : null;
    }

    public function superior(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'superior_id');
    }

    public function subordinates(): HasMany
    {
        return $this->hasMany(Employee::class, 'superior_id');
    }
}
