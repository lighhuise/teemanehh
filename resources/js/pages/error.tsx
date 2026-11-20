import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function ErrorPage({ status }: { status: number }) {
    const messages: Record<number, { title: string; description: string }> = {
        503: {
            title: 'Service Unavailable',
            description: 'Sorry, we are doing some scheduled maintenance. Please check back soon.',
        },
        500: {
            title: 'Server Error',
            description: 'Whoops, something went wrong on our servers. Our team has been alerted.',
        },
        404: {
            title: 'Page Not Found',
            description: 'Sorry, the page you are looking for could not be found or has been moved.',
        },
        403: {
            title: 'Forbidden',
            description: 'Sorry, you do not have permission to access this page.',
        },
    };

    const { title, description } = messages[status] || {
        title: 'Unexpected Error',
        description: 'An unexpected error occurred.',
    };

    return (
        <AppLayout title={`${status}: ${title}`}>
            <section className="relative overflow-hidden isolate bg-background pt-32 sm:pt-40 pb-20 sm:pb-28 min-h-[70vh] flex flex-col justify-center">
                <div aria-hidden="true" className="page-header-radial absolute inset-0 pointer-events-none select-none -z-10" />
                <Wrapper className="relative z-10 text-center flex flex-col items-center justify-center">
                    <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6 shadow-sm">
                        <AlertTriangle className="w-10 h-10" />
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border bg-primary/10 text-primary border-primary/20 mb-5">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                        Error {status}
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tighter text-foreground uppercase mb-5">
                        {title}
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
                        {description}
                    </p>

                    <Link href="/" prefetch="hover" className={buttonVariants({ size: 'xl' })}>
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
