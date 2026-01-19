import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellXRegular } from './BellXRegular';
import { BellXRegularDuotone } from './BellXRegularDuotone';
import { BellXBold } from './BellXBold';
import { BellXBoldDuotone } from './BellXBoldDuotone';
import { BellXFill } from './BellXFill';
import { BellXFillDuotone } from './BellXFillDuotone';

export interface BellXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BellX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BellXRegular } from 'stera-icons/icons/BellXRegular';
 */
const BellX = memo(forwardRef<SVGSVGElement, BellXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BellXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BellXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BellXFill ref={ref} {...rest} />;
  if (duotone) return <BellXRegularDuotone ref={ref} {...rest} />;
  return <BellXRegular ref={ref} {...rest} />;
}));

BellX.displayName = 'BellX';

// Triple export pattern (lucide-react style)
export { BellX, BellX as BellXIcon, BellX as SiBellX };
