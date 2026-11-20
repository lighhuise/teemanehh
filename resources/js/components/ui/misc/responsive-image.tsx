import React from 'react';
import { ImageSource, isResponsiveImageAsset } from '@/lib/responsive-images';

export interface ResponsiveImageProps
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
    source: ImageSource;
    srcSet?: string;
    sizes?: string;
    priority?: boolean;
}

export function ResponsiveImage({
    source,
    srcSet,
    sizes,
    priority = false,
    loading,
    decoding,
    fetchPriority,
    width,
    height,
    alt = '',
    ...props
}: ResponsiveImageProps) {
    const isAsset = isResponsiveImageAsset(source);
    const resolvedSrc = isAsset ? source.src : source;
    const resolvedSrcSet = srcSet ?? (isAsset ? source.srcSet : undefined);
    const resolvedWidth = width ?? (isAsset ? source.width : undefined);
    const resolvedHeight = height ?? (isAsset ? source.height : undefined);

    return (
        <img
            src={resolvedSrc}
            srcSet={resolvedSrcSet}
            sizes={resolvedSrcSet ? sizes : undefined}
            width={resolvedWidth}
            height={resolvedHeight}
            alt={alt}
            loading={loading ?? (priority ? 'eager' : 'lazy')}
            decoding={decoding ?? (priority ? 'sync' : 'async')}
            fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
            {...props}
        />
    );
}

export default ResponsiveImage;
