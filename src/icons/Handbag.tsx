import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandbagRegular } from './HandbagRegular';
import { HandbagRegularDuotone } from './HandbagRegularDuotone';
import { HandbagBold } from './HandbagBold';
import { HandbagBoldDuotone } from './HandbagBoldDuotone';
import { HandbagFill } from './HandbagFill';
import { HandbagFillDuotone } from './HandbagFillDuotone';

export interface HandbagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Handbag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HandbagRegular } from 'stera-icons/icons/HandbagRegular';
 */
const Handbag = memo(forwardRef<SVGSVGElement, HandbagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandbagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandbagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandbagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandbagFill ref={ref} {...rest} />;
  if (duotone) return <HandbagRegularDuotone ref={ref} {...rest} />;
  return <HandbagRegular ref={ref} {...rest} />;
}));

Handbag.displayName = 'Handbag';

// Triple export pattern (lucide-react style)
export { Handbag, Handbag as HandbagIcon, Handbag as SiHandbag };
