<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Decommission and remove legacy crane and lifting services
        Service::whereIn('slug', [
            'mobile-crane-hire',
            'heavy-lifting',
            'rigging-services',
        ])->delete();

        $services = [
            [
                'title' => 'Heavy Haulage & Abnormal Transport',
                'slug' => 'heavy-haulage-abnormal-transport',
                'short_description' => 'Specialised transport solutions for oversized machinery, abnormal loads, and complex logistics across the SADC region.',
                'description' => '<p>When the scale is extraordinary, experience makes the difference. Heavy haulage and abnormal transport are at the heart of what we do. Our reputation has been built on years of industry experience, an extensive fleet and the ability to manage some of the most challenging transport requirements across South Africa and the SADC region.</p>',
                'image' => 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Abnormal Haulage Expertise',
                            'heading' => 'Extraordinary Scale, Proven Execution',
                            'content' => '<p>Heavy haulage and abnormal transport demand deep experience and specialized equipment. We transport high-mass cargo, superloads, and oversized machinery that fall outside conventional legal parameters.</p><p>We partner with leading local and international industrial clients who require certainty, technical rigor, and flawless project delivery throughout the SADC region.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => '250T+',
                            'stat_card_label' => 'Payload Capacity',
                            'button_label' => 'Request a Quote',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Comprehensive Fleet Capabilities',
                            'heading' => 'Turnkey Regional Transport Solutions',
                            'content' => '<p>From heavy mining machinery and renewable energy components to large industrial transformers and refinery infrastructure, our fleet is engineered for extreme duty.</p><p>Every operation receives dedicated project management, custom trailer configurations, and meticulous risk mitigation to deliver loads safely and on schedule.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => '100%',
                            'stat_card_label' => 'Turnkey Execution',
                            'button_label' => 'Contact Us',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Route Planning & Escort Services',
                'slug' => 'route-planning-escort-services',
                'short_description' => 'Comprehensive route assessments, obstacle mitigation, permit clearance, and experienced escort drivers with real-time GPS tracking.',
                'description' => '<p>The route we choose plays a significant role in the safe transportation of every load, requiring thorough preparation and an understanding of what lies ahead before the journey begins.</p>',
                'image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Route Reconnaissance & Engineering',
                            'heading' => 'Safe & Practical Route Planning',
                            'content' => '<p>We evaluate road conditions, bridge weight formulas, overhead infrastructure clearances, and turning radiuses long before wheels begin turning.</p><p>Advance route surveys identify potential bottlenecks early, allowing us to coordinate utility line clearances, minimize transit delays, and brief convoy drivers thoroughly.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => 'Zero',
                            'stat_card_label' => 'Route Bottlenecks',
                            'button_label' => 'Plan Your Route',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Certified Pilots & Live Fleet Oversight',
                            'heading' => 'Convoy Escorts & Real-Time Tracking',
                            'content' => '<p>Our certified abnormal escort drivers provide essential safety support throughout the journey, maintaining radio communication, traffic warnings, and public safety on shared roads.</p><p>Our entire fleet is equipped with satellite GPS tracking, providing 24/7 visibility over vehicle coordinates, speeds, and transit milestones for clients and operations alike.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => '24/7',
                            'stat_card_label' => 'Live GPS Oversight',
                            'button_label' => 'Speak to Dispatch',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Technical Transport Planning',
                'slug' => 'technical-transport-planning',
                'short_description' => 'Detailed CAD drawings, 3D simulations, and engineered route studies for exceptionally complex and oversized loads.',
                'description' => '<p>Some loads require a level of technical expertise that extends far beyond conventional transport. Combining advanced technical planning with extensive industry experience allows us to confidently transport loads that fall outside conventional parameters.</p>',
                'image' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Engineered Precision',
                            'heading' => 'CAD Route & Axle Load Studies',
                            'content' => '<p>For complex superloads, we produce detailed 2D and 3D CAD drawings illustrating center-of-gravity dynamics, trailer swept-paths, and precise axle weight distribution.</p><p>These technical schematics provide road permit authorities with verified proof of structural clearance and road safety compliance before transit begins.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => 'CAD / 3D',
                            'stat_card_label' => 'Engineered Simulations',
                            'button_label' => 'Request CAD Study',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Structural Feasibility',
                            'heading' => 'Bridge Formulas & Ground Pressures',
                            'content' => '<p>Moving exceptional tonnage requires rigorous ground pressure calculations and bridge loading evaluations to protect public infrastructure.</p><p>By pairing advanced digital planning with decades of field experience, we execute high-stakes transport projects with certainty and regulatory approvals intact.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => '100%',
                            'stat_card_label' => 'Permit Approval Rate',
                            'button_label' => 'Consult an Engineer',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Multi-Axle Modular Lowbed Transport',
                'slug' => 'multi-axel-heavy-transport',
                'short_description' => 'High-capacity multi-axle modular hydraulic trailers and lowbeds configured for extreme weight distribution and superload transit.',
                'description' => '<p>When moving payloads that challenge legal road boundaries, multi-axle hydraulic platform trailers offer the stability, hydraulic leveling, and payload distribution required to move mega-cargo safely.</p>',
                'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Hydraulic Platform Technology',
                            'heading' => 'Multi-Axle Modular Configurations',
                            'content' => '<p>Our expandable modular platform trailers configure into custom line layouts tailored to the exact mass and dimensions of each superload.</p><p>With independent hydraulic steering and variable ride-height control, our units maneuver sharp radiuses, steep gradients, and restricted site entries with total control.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => 'Multi-Axle',
                            'stat_card_label' => 'Modular Platforms',
                            'button_label' => 'Explore Configurations',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Superload Transport Engineering',
                            'heading' => 'Extreme Payload Capacity Beyond 250T',
                            'content' => '<p>Engineered to carry payloads in excess of 250 tons, our modular lowbeds regularly move mining excavators, mill shells, large electrical transformers, and refinery reactors.</p><p>Each convoy is pulled by high-torque heavy prime movers and operated by veteran crews dedicated to exceptional transport operations.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => '250T+',
                            'stat_card_label' => 'Superload Payloads',
                            'button_label' => 'Request Lowbed Transit',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Cross-Border Transport Logistics',
                'slug' => 'cross-border-transport',
                'short_description' => 'Seamless abnormal transport logistics and customs clearance across South Africa, Namibia, Botswana, Zimbabwe, Mozambique, and Zambia.',
                'description' => '<p>Moving abnormal freight across African borders demands deep regulatory knowledge, bonded transport capabilities, and coordination with regional road authorities.</p>',
                'image' => 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Regional SADC Transit',
                            'heading' => 'Cross-Border Abnormal Corridors',
                            'content' => '<p>We provide comprehensive abnormal transport logistics across primary trade corridors connecting South Africa, Namibia, Botswana, Zimbabwe, Mozambique, and Zambia.</p><p>Our dedicated operations handle international transit routes from marine ports and manufacturing hubs directly to remote mines and infrastructure sites.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => '6+ SADC',
                            'stat_card_label' => 'Countries Covered',
                            'button_label' => 'Cross-Border Inquiry',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Regulatory & Corridor Oversight',
                            'heading' => 'Customs Clearance & Border Escorts',
                            'content' => '<p>Our cross-border specialists manage all foreign abnormal permits, customs transit documentation, and regional border post escorts, minimizing border dwell times.</p><p>With bilingual corridor coordinators and live satellite GPS tracking, clients retain complete milestone visibility across national borders.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => 'Bonded',
                            'stat_card_label' => 'Transit & Clearance',
                            'button_label' => 'Book Cross-Border Load',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Machinery Relocation & Industrial Transit',
                'slug' => 'machinery-relocation',
                'short_description' => 'Safe and efficient extraction, dismantling, transport, and precision positioning of industrial machinery.',
                'description' => '<p>We offer comprehensive machinery relocation services, covering extraction, specialised abnormal transport, and final positioning for industrial and manufacturing plants.</p>',
                'image' => 'https://images.unsplash.com/photo-1565439390124-b5f7e7f7bb10?auto=format&fit=crop&q=80&w=1200&h=600',
                'content_blocks' => [
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Turnkey Plant Transfers',
                            'heading' => 'Precision Machinery Transit',
                            'content' => '<p>We provide complete machinery relocation services, managing plant staging, specialized transport, and site repositioning for industrial operations.</p><p>From factory reconfigurations to full multi-line manufacturing transfers, our experienced crews ensure zero damage and strict adherence to project timelines.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1565439390124-b5f7e7f7bb10?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'left',
                            'darker_background' => true,
                            'stat_card_value' => 'Turnkey',
                            'stat_card_label' => 'Industrial Relocations',
                            'button_label' => 'Plan Machine Move',
                            'button_url' => '/contact-us',
                        ],
                    ],
                    [
                        'type' => 'media_text',
                        'data' => [
                            'subheading' => 'Confined Space Engineering',
                            'heading' => 'Machine Skates, Jacks & Minimal Downtime',
                            'content' => '<p>Extracting heavy machinery through tight factory entries requires specialized handling. We use heavy-duty machine skates, hydraulic jacks, and low-profile transport to maneuver plant assets safely.</p><p>We coordinate operations during scheduled plant shutdowns and weekend windows to keep factory downtime to an absolute minimum.</p>',
                            'images' => [
                                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=800',
                            ],
                            'image_position' => 'right',
                            'darker_background' => false,
                            'stat_card_value' => 'Low Downtime',
                            'stat_card_label' => 'Shutdown Execution',
                            'button_label' => 'Consult Relocation Team',
                            'button_url' => '/contact-us',
                        ],
                    ],
                ],
            ],
        ];

        foreach ($services as $serviceData) {
            Service::updateOrCreate(
                ['slug' => $serviceData['slug']],
                [
                    'title' => $serviceData['title'],
                    'short_description' => $serviceData['short_description'],
                    'description' => $serviceData['description'],
                    'content_blocks' => $serviceData['content_blocks'] ?? null,
                    'image' => $serviceData['image'] ?? null,
                    'is_active' => true,
                ]
            );
        }
    }
}
