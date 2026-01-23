import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TennisBallRegular } from './TennisBallRegular.js';
import { TennisBallRegularDuotone } from './TennisBallRegularDuotone.js';
import { TennisBallBold } from './TennisBallBold.js';
import { TennisBallBoldDuotone } from './TennisBallBoldDuotone.js';
import { TennisBallFill } from './TennisBallFill.js';
import { TennisBallFillDuotone } from './TennisBallFillDuotone.js';

export interface TennisBallProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TennisBall - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TennisBallRegular } from 'stera-icons/icons/TennisBallRegular';
 */
const TennisBall = memo(forwardRef<SVGSVGElement, TennisBallProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TennisBallBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TennisBallBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TennisBallFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TennisBallFill ref={ref} {...rest} />;
  if (duotone) return <TennisBallRegularDuotone ref={ref} {...rest} />;
  return <TennisBallRegular ref={ref} {...rest} />;
}));

TennisBall.displayName = 'TennisBall';

// Triple export pattern (lucide-react style)
export { TennisBall, TennisBall as TennisBallIcon, TennisBall as SiTennisBall };
export default TennisBall;
