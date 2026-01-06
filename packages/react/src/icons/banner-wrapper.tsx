import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BannerIcon as RegularBannerIcon } from './banner';
import { BannerIconDuotone as BannerIconDuotone } from './banner-duotone';
import { BannerIconBold as BannerIconBold } from './banner-bold';
import { BannerIconBoldDuotone as BannerIconBoldDuotone } from './banner-bold-duotone';
import { BannerIconFill as BannerIconFill } from './banner-fill';
import { BannerIconFillDuotone as BannerIconFillDuotone } from './banner-fill-duotone';

export interface BannerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BannerIcon = memo(forwardRef<SVGSVGElement, BannerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BannerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BannerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BannerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BannerIconFill ref={ref} {...props} />;
  if (duotone) return <BannerIconDuotone ref={ref} {...props} />;
  return <RegularBannerIcon ref={ref} {...props} />;
}));

BannerIcon.displayName = 'BannerIcon';

export { BannerIcon };
