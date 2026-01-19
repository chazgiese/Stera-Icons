import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineWeightRegular } from './LineWeightRegular';
import { LineWeightRegularDuotone } from './LineWeightRegularDuotone';
import { LineWeightBold } from './LineWeightBold';
import { LineWeightBoldDuotone } from './LineWeightBoldDuotone';
import { LineWeightFill } from './LineWeightFill';
import { LineWeightFillDuotone } from './LineWeightFillDuotone';

export interface LineWeightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LineWeight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LineWeightRegular } from 'stera-icons/icons/LineWeightRegular';
 */
const LineWeight = memo(forwardRef<SVGSVGElement, LineWeightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineWeightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LineWeightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LineWeightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LineWeightFill ref={ref} {...rest} />;
  if (duotone) return <LineWeightRegularDuotone ref={ref} {...rest} />;
  return <LineWeightRegular ref={ref} {...rest} />;
}));

LineWeight.displayName = 'LineWeight';

// Triple export pattern (lucide-react style)
export { LineWeight, LineWeight as LineWeightIcon, LineWeight as SiLineWeight };
export default LineWeight;
