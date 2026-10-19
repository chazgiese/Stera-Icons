import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleDivideHRegular } from './CircleDivideHRegular.js';
import { CircleDivideHRegularDuotone } from './CircleDivideHRegularDuotone.js';
import { CircleDivideHBold } from './CircleDivideHBold.js';
import { CircleDivideHBoldDuotone } from './CircleDivideHBoldDuotone.js';
import { CircleDivideHFill } from './CircleDivideHFill.js';
import { CircleDivideHFillDuotone } from './CircleDivideHFillDuotone.js';

export interface CircleDivideHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDivideH - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDivideHRegular } from 'stera-icons/icons/CircleDivideHRegular';
 */
const CircleDivideH = memo(forwardRef<SVGSVGElement, CircleDivideHProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideHBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDivideHBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDivideHFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDivideHFill ref={ref} {...rest} />;
  if (duotone) return <CircleDivideHRegularDuotone ref={ref} {...rest} />;
  return <CircleDivideHRegular ref={ref} {...rest} />;
}));

CircleDivideH.displayName = 'CircleDivideH';

// Triple export pattern
export { CircleDivideH, CircleDivideH as CircleDivideHIcon, CircleDivideH as SiCircleDivideH };
export default CircleDivideH;
