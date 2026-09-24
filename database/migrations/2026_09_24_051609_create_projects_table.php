<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('featured_image')->nullable();
            $table->json('gallery')->nullable();
            
            // Context
            $table->string('industry')->nullable();
            $table->string('origin')->nullable();
            $table->string('destination')->nullable();
            
            // Core Load Stats
            $table->string('load_weight')->nullable();
            $table->string('load_dimensions')->nullable();
            $table->string('equipment_used')->nullable();
            
            // Content
            $table->text('route_challenges')->nullable();
            $table->longText('content')->nullable();
            
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
