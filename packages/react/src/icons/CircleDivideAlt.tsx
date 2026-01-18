import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideAltRegular } from './CircleDivideAltRegular';
import { CircleDivideAltRegularDuotone } from './CircleDivideAltRegularDuotone';
import { CircleDivideAltBold } from './CircleDivideAltBold';
import { CircleDivideAltBoldDuotone } from './CircleDivideAltBoldDuotone';
import { CircleDivideAltFill } from './CircleDivideAltFill';
import { CircleDivideAltFillDuotone } from './CircleDivideAltFillDuotone';

export interface CircleDivideAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDivideAlt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDivideAltRegular } from 'stera-icons/CircleDivideAltRegular';
 */
const CircleDivideAlt = memo(forwardRef<SVGSVGElement, CircleDivideAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDivideAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDivideAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDivideAltFill ref={ref} {...rest} />;
  if (duotone) return <CircleDivideAltRegularDuotone ref={ref} {...rest} />;
  return <CircleDivideAltRegular ref={ref} {...rest} />;
}));

CircleDivideAlt.displayName = 'CircleDivideAlt';

export { CircleDivideAlt };
