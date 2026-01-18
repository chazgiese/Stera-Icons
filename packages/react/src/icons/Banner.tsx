import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BannerRegular } from './BannerRegular';
import { BannerRegularDuotone } from './BannerRegularDuotone';
import { BannerBold } from './BannerBold';
import { BannerBoldDuotone } from './BannerBoldDuotone';
import { BannerFill } from './BannerFill';
import { BannerFillDuotone } from './BannerFillDuotone';

export interface BannerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Banner - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BannerRegular } from 'stera-icons/BannerRegular';
 */
const Banner = memo(forwardRef<SVGSVGElement, BannerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BannerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BannerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BannerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BannerFill ref={ref} {...rest} />;
  if (duotone) return <BannerRegularDuotone ref={ref} {...rest} />;
  return <BannerRegular ref={ref} {...rest} />;
}));

Banner.displayName = 'Banner';

// Triple export pattern (lucide-react style)
export { Banner, Banner as BannerIcon, Banner as SiBanner };
