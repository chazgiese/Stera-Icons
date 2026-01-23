import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HeadphonesRegular } from './HeadphonesRegular.js';
import { HeadphonesRegularDuotone } from './HeadphonesRegularDuotone.js';
import { HeadphonesBold } from './HeadphonesBold.js';
import { HeadphonesBoldDuotone } from './HeadphonesBoldDuotone.js';
import { HeadphonesFill } from './HeadphonesFill.js';
import { HeadphonesFillDuotone } from './HeadphonesFillDuotone.js';

export interface HeadphonesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Headphones - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HeadphonesRegular } from 'stera-icons/icons/HeadphonesRegular';
 */
const Headphones = memo(forwardRef<SVGSVGElement, HeadphonesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HeadphonesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HeadphonesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HeadphonesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HeadphonesFill ref={ref} {...rest} />;
  if (duotone) return <HeadphonesRegularDuotone ref={ref} {...rest} />;
  return <HeadphonesRegular ref={ref} {...rest} />;
}));

Headphones.displayName = 'Headphones';

// Triple export pattern (lucide-react style)
export { Headphones, Headphones as HeadphonesIcon, Headphones as SiHeadphones };
export default Headphones;
