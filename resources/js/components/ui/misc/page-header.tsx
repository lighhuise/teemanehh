import React from "react";
import Wrapper from "@/components/ui/misc/wrapper";

interface PageHeaderProps {
    title: React.ReactNode;
    description?: string;
    image?: string;
    className?: string;
}

export default function PageHeader({ title, description, image, className }: PageHeaderProps) {
    return (
        <div className={`relative bg-background overflow-hidden border-b border-border/50 pb-24 pt-48 ${className || ''}`}>
            {/* Subtle background decoration instead of heavy images */}
            <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

            <Wrapper className="relative z-10">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </Wrapper>
        </div>
    );
}
