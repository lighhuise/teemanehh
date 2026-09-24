<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                FileUpload::make('featured_image')
                    ->image(),
                Textarea::make('gallery')
                    ->columnSpanFull(),
                TextInput::make('industry'),
                TextInput::make('origin'),
                TextInput::make('destination'),
                TextInput::make('load_weight'),
                TextInput::make('load_dimensions'),
                TextInput::make('equipment_used'),
                Textarea::make('route_challenges')
                    ->columnSpanFull(),
                Textarea::make('content')
                    ->columnSpanFull(),
                Toggle::make('is_featured')
                    ->required(),
            ]);
    }
}
