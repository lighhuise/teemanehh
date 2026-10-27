<?php

use App\Models\Service;
use Illuminate\Support\Facades\Cache;

beforeEach(function () {
    Cache::flush();
});

it('renders services index with services from database and their images', function () {
    Service::factory()->create([
        'title' => 'Test Heavy Haulage',
        'is_active' => true,
        'image' => 'https://example.com/test-image.jpg',
    ]);

    $response = $this->get('/services');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('services/index')
        ->has('services', 1)
        ->where('services.0.title', 'Test Heavy Haulage')
        ->where('services.0.image', 'https://example.com/test-image.jpg')
        ->where('services.0.featured_image_url', 'https://example.com/test-image.jpg')
    );
});

it('resolves featured_image_url from content blocks when image is empty', function () {
    Service::factory()->create([
        'title' => 'Content Block Service',
        'is_active' => true,
        'image' => null,
        'content_blocks' => [
            [
                'type' => 'image',
                'data' => [
                    'image' => 'https://example.com/block-image.jpg',
                ],
            ],
        ],
    ]);

    $response = $this->get('/services');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('services/index')
        ->has('services', 1)
        ->where('services.0.title', 'Content Block Service')
        ->where('services.0.featured_image_url', 'https://example.com/block-image.jpg')
    );
});
