import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="group relative p-8 bg-card flex flex-col justify-between min-h-65 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 rounded-2xl border border-border/40 hover:border-primary/20"
        >
            <div className="space-y-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                    0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                    {service.short_description}
                </p>
            </div>
            <div className="mt-8 flex items-center text-sm font-semibold tracking-wide text-primary">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
}
