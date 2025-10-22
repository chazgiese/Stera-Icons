import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BannerIcon as BannerIconRegular } from './banner';
import { BannerIconBold } from './banner-bold';
import { BannerIconFilled } from './banner-filled';
import { BannerIconFilltone } from './banner-filltone';
import { BannerIconLinetone } from './banner-linetone';

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
    case 'filltone':
      return <BannerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BannerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BannerIconRegular ref={ref} {...props} />;
  }
}));

BannerIcon.displayName = 'BannerIcon';

export { BannerIcon };
