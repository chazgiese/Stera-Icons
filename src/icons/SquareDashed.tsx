import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareDashedRegular } from './SquareDashedRegular';
import { SquareDashedRegularDuotone } from './SquareDashedRegularDuotone';
import { SquareDashedBold } from './SquareDashedBold';
import { SquareDashedBoldDuotone } from './SquareDashedBoldDuotone';
import { SquareDashedFill } from './SquareDashedFill';
import { SquareDashedFillDuotone } from './SquareDashedFillDuotone';

export interface SquareDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SquareDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SquareDashedRegular } from 'stera-icons/icons/SquareDashedRegular';
 */
const SquareDashed = memo(forwardRef<SVGSVGElement, SquareDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquareDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquareDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquareDashedFill ref={ref} {...rest} />;
  if (duotone) return <SquareDashedRegularDuotone ref={ref} {...rest} />;
  return <SquareDashedRegular ref={ref} {...rest} />;
}));

SquareDashed.displayName = 'SquareDashed';

// Triple export pattern (lucide-react style)
export { SquareDashed, SquareDashed as SquareDashedIcon, SquareDashed as SiSquareDashed };
