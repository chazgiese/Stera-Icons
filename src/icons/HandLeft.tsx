import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HandLeftRegular } from './HandLeftRegular.js';
import { HandLeftRegularDuotone } from './HandLeftRegularDuotone.js';
import { HandLeftBold } from './HandLeftBold.js';
import { HandLeftBoldDuotone } from './HandLeftBoldDuotone.js';
import { HandLeftFill } from './HandLeftFill.js';
import { HandLeftFillDuotone } from './HandLeftFillDuotone.js';

export interface HandLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HandLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HandLeftRegular } from 'stera-icons/icons/HandLeftRegular';
 */
const HandLeft = memo(forwardRef<SVGSVGElement, HandLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandLeftFill ref={ref} {...rest} />;
  if (duotone) return <HandLeftRegularDuotone ref={ref} {...rest} />;
  return <HandLeftRegular ref={ref} {...rest} />;
}));

HandLeft.displayName = 'HandLeft';

// Triple export pattern (lucide-react style)
export { HandLeft, HandLeft as HandLeftIcon, HandLeft as SiHandLeft };
export default HandLeft;
