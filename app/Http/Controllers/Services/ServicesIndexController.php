<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class ServicesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        return Inertia::render('services/index', [
            'services' => Cache::remember('services_index', 3600, function () {
                return Service::with('media')
                    ->where('is_active', true)
                    ->get()
                    ->values()
                    ->toArray();
            }),
        ]);
    }
}
