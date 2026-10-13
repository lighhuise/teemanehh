<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Remove legacy faqs to ensure clean records without crane or general lifting references
        Faq::query()->delete();

        $faqs = [
            [
                'question' => 'What is considered an abnormal load, and what permits are required in South Africa?',
                'answer' => '<p>An abnormal load is any vehicle or cargo combination that cannot be dismantled without unreasonable expense or risk of damage, and exceeds standard legal road dimensions or mass regulations under the National Road Traffic Act.</p><p>Loads exceeding standard dimensions (length over 18.5m or 22m combination, width over 2.6m, overall height over 4.3m) or exceeding permissible axle mass limits require provincial and national abnormal transport permits. Teemane Heavy Haulage manages the complete permit application process across all provincial departments of transport and regional road authorities before dispatch.</p>',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'question' => 'What is the maximum payload capacity Teemane Heavy Haulage can transport?',
                'answer' => '<p>Our modern fleet of multi-axle modular hydraulic platform trailers and heavy-duty prime movers can be configured for superloads with payloads in excess of 250 tons.</p><p>By distributing cargo mass across multiple hydraulic axle lines with independent steering and leveling suspension, we ensure full compliance with statutory bridge weight formulas while safeguarding road infrastructure.</p>',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'question' => 'Do you provide route planning, route surveys, and certified escort services?',
                'answer' => '<p>Yes. Comprehensive route planning and advance route surveys are fundamental to our operations. We evaluate bridge capacities, turning radiuses, road gradient conditions, and overhead clearance obstacles (such as low bridges, toll gates, and electrical or telephone lines).</p><p>For loads requiring escorts, our certified pilot drivers and escort vehicles provide live traffic management, pilot warnings, and communication throughout the convoy journey. We also coordinate with provincial traffic authorities and South African Police Service (SAPS) escorts where mandated by permit conditions.</p>',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'question' => 'What cross-border SADC countries does THH service?',
                'answer' => '<p>Headquartered in Bellville South, Cape Town, we operate across South Africa and key cross-border transit corridors throughout the Southern African Development Community (SADC), including Namibia, Botswana, Zimbabwe, Mozambique, and Zambia.</p><p>We provide full customs transit clearance facilitation, border corridor escort management, and regional permits for seamless international border crossings.</p>',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'question' => 'How does real-time GPS tracking work for clients during transit?',
                'answer' => '<p>Our entire fleet is equipped with advanced satellite GPS tracking technology, providing 24/7 visibility of vehicle location, convoy speed, and transit milestones.</p><p>With live tracking data, our logistics control center coordinates vehicle movements, monitors route progress, and maintains clear, proactive communication with our drivers and clients from collection to offloading.</p>',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'question' => 'How far in advance should abnormal transport and route surveys be scheduled?',
                'answer' => '<p>While urgent dispatch and contingency transport are available 24/7, complex abnormal superloads requiring statutory provincial permits, bridge engineering assessments, CAD transport drawings, or municipal utility clearances (such as lifting overhead power cables) typically require 2 to 4 weeks of advance planning.</p><p>Early engagement ensures all regulatory approvals and route permissions are secured ahead of project timelines.</p>',
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'question' => 'Are your abnormal transport and emergency response services available 24/7?',
                'answer' => '<p>Yes, our operations and dispatch teams are available 24 hours a day, 365 days a year. We provide continuous support for active convoys, immediate emergency response, and round-the-clock client updates.</p>',
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'question' => 'What details are required to obtain an abnormal transport quotation?',
                'answer' => '<p>To provide an accurate and engineered transport proposal, we require cargo dimensions (length, width, height), gross weight, collection and delivery locations, site access conditions, and preferred schedule dates.</p><p>Our technical team will review the specifications, determine the optimal trailer configuration, and advise on permit and escort requirements.</p>',
                'sort_order' => 8,
                'is_active' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }

        Cache::forget('faqs_index');
    }
}
