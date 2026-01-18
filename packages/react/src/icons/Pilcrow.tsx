import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PilcrowRegular } from './PilcrowRegular';
import { PilcrowRegularDuotone } from './PilcrowRegularDuotone';
import { PilcrowBold } from './PilcrowBold';
import { PilcrowBoldDuotone } from './PilcrowBoldDuotone';
import { PilcrowFill } from './PilcrowFill';
import { PilcrowFillDuotone } from './PilcrowFillDuotone';

export interface PilcrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pilcrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PilcrowRegular } from 'stera-icons/PilcrowRegular';
 */
const Pilcrow = memo(forwardRef<SVGSVGElement, PilcrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PilcrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PilcrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PilcrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PilcrowFill ref={ref} {...rest} />;
  if (duotone) return <PilcrowRegularDuotone ref={ref} {...rest} />;
  return <PilcrowRegular ref={ref} {...rest} />;
}));

Pilcrow.displayName = 'Pilcrow';

// Triple export pattern (lucide-react style)
export { Pilcrow, Pilcrow as PilcrowIcon, Pilcrow as SiPilcrow };
