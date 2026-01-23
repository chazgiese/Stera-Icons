import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BannerRegular } from './BannerRegular.js';
import { BannerRegularDuotone } from './BannerRegularDuotone.js';
import { BannerBold } from './BannerBold.js';
import { BannerBoldDuotone } from './BannerBoldDuotone.js';
import { BannerFill } from './BannerFill.js';
import { BannerFillDuotone } from './BannerFillDuotone.js';

export interface BannerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Banner - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BannerRegular } from 'stera-icons/icons/BannerRegular';
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
export default Banner;
