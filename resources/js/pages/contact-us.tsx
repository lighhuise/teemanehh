import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { FormEvent, useEffect } from 'react';
import { toast } from '@/components/ui/toast';
import { cn } from "@/lib/utils";
import SectionHeading from '@/components/ui/misc/section-heading';
import PageHeader from '@/components/ui/misc/page-header';
import ScrollDivider from '@/components/scroll-divider';
import { responsiveImages } from '@/lib/responsive-images';

interface HoneypotData {
    enabled: boolean;
    nameFieldName: string;
    validFromFieldName: string;
    encryptedValidFrom: string;
}

export default function ContactUs({ flash, honeypot }: { flash: { success?: string }, honeypot?: HoneypotData }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        ...(honeypot?.enabled ? {
            [honeypot.nameFieldName]: '',
            [honeypot.validFromFieldName]: honeypot.encryptedValidFrom,
        } : {})
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/contact-us', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.add({ title: 'Success!', description: 'Your message has been sent successfully.', type: 'success' });
            },
            onError: () => {
                toast.add({ title: 'Error', description: 'Please check the form for errors and try again.', type: 'error' });
            }
        });
    };

    return (
        <>


            <PageHeader
                label="Get In Touch"
                title={
                    <>
                        TELL US ABOUT YOUR{' '}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1">
                            MOVE
                        </span>
                    </>
                }
                description="To help us assess your transport requirements, share your cargo specifications, dimensions, collection point, and destination with our team."
                image={responsiveImages.contactHeader}
                imageAlt="Teemane Heavy Haulage Mercedes-Benz truck transporting oversized industrial storage tanks"
                imageClassName="object-[45%_55%]"
            />
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center uppercase font-heading">
                            24/7/365 Emergency Dispatch
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Bellville South Headquarters
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Rapid Quote Turnaround
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Nationwide &amp; SADC Coverage
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center uppercase font-heading">
                            Heavy Haulage Enquiries
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Oversized Cargo Assessments
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Machinery Transport Planning
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Direct Hotline: 086 188 8004
                        </span>
                    </>,
                ]}
            />

            <section className="py-16 sm:py-24 lg:py-28 bg-background">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-10">
                            <SectionHeading
                                label="Direct Contact"
                                title="Our Head Office"
                                align="left"
                            >
                                Headquartered in Bellville South, Cape Town, we provide specialised heavy haulage and machinery transport solutions tailored to your load and schedule.
                            </SectionHeading>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs">
                                    <div className="shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground">
                                            Address
                                        </h3>
                                        <p className="text-muted-foreground text-sm sm:text-base mt-1 leading-relaxed">
                                            6 Van Eck St
                                            <br />
                                            Bellville South, Cape Town, 7530
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs">
                                    <div className="shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground">
                                            24/7 Dispatch Hotline
                                        </h3>
                                        <a
                                            href="tel:0861888004"
                                            className="cursor-pointer block text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors mt-1"
                                        >
                                            086 188 8004
                                        </a>
                                        <p className="text-[11px] text-primary mt-1 uppercase tracking-[0.16em] font-black">
                                            Available 24hrs, 365 Days
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs">
                                    <div className="shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:enquiries@teemanehh.co.za"
                                            className="cursor-pointer block text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors mt-1 break-all"
                                        >
                                            enquiries@teemanehh.co.za
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Enquiry categories */}
                            <div className="border-t border-border pt-8">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground mb-4">
                                    Specialised Enquiry Types
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {['Heavy Haulage', 'Oversized Cargo', 'Machinery Transport', 'General Enquiry'].map((type) => (
                                        <span
                                            key={type}
                                            className="px-3.5 py-1.5 rounded-full bg-muted/70 border border-border text-xs font-bold uppercase tracking-wider text-foreground"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7 bg-card border border-border p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl relative">
                            {flash?.success ? (
                                <div className="absolute inset-0 z-10 bg-card/96 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-primary/40">
                                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl border border-primary/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-black uppercase tracking-tighter mb-3 text-foreground">
                                        Message Sent!
                                    </h3>
                                    <p className="text-base sm:text-lg text-muted-foreground max-w-md">
                                        {flash.success}
                                    </p>
                                </div>
                            ) : null}

                            <div className="mb-8">
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary block mb-2">
                                    Project Specification
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-foreground uppercase">
                                    Send a Message
                                </h2>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Include dimensions, estimated tonnage, collection point, and destination for the fastest quote turnaround.
                                </p>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground block">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="e.g. John van der Merwe"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={cn('h-12 bg-background', errors.name ? 'border-destructive' : '')}
                                    />
                                    {errors.name && <p className="text-xs sm:text-sm text-destructive font-medium">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground block">
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="name@company.co.za"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className={cn('h-12 bg-background', errors.email ? 'border-destructive' : '')}
                                        />
                                        {errors.email && <p className="text-xs sm:text-sm text-destructive font-medium">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground block">
                                            Phone Number <span className="text-muted-foreground font-normal normal-case">(Optional)</span>
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+27 82 000 0000"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className={cn('h-12 bg-background', errors.phone ? 'border-destructive' : '')}
                                        />
                                        {errors.phone && <p className="text-xs sm:text-sm text-destructive font-medium">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground block">
                                        Cargo &amp; Route Details
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={7}
                                        placeholder="Describe your cargo dimensions, weight, origin, destination, and target dates..."
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className={cn('min-h-36 bg-background', errors.message ? 'border-destructive' : '')}
                                    />
                                    {errors.message && <p className="text-xs sm:text-sm text-destructive font-medium">{errors.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    size="xl"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    {processing ? 'Sending Enquiry...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

ContactUs.layout = (page: React.ReactNode) => <AppLayout title="Contact Us">{page}</AppLayout>;
