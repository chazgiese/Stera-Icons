import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BannerIcon as BannerIconRegular } from './banner';
import { BannerIconBold } from './banner-bold';
import { BannerIconFilled } from './banner-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BannerIconProps extends IconProps {
  variant?: IconVariant;
}

const BannerIcon = memo(forwardRef<SVGSVGElement, BannerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BannerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BannerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BannerIconRegular ref={ref} {...props} />;
  }
}));

BannerIcon.displayName = 'BannerIcon';

export { BannerIcon };
