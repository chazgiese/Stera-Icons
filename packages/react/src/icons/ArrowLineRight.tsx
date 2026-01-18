import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineRightRegular } from './ArrowLineRightRegular';
import { ArrowLineRightRegularDuotone } from './ArrowLineRightRegularDuotone';
import { ArrowLineRightBold } from './ArrowLineRightBold';
import { ArrowLineRightBoldDuotone } from './ArrowLineRightBoldDuotone';
import { ArrowLineRightFill } from './ArrowLineRightFill';
import { ArrowLineRightFillDuotone } from './ArrowLineRightFillDuotone';

export interface ArrowLineRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLineRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLineRightRegular } from 'stera-icons/ArrowLineRightRegular';
 */
const ArrowLineRight = memo(forwardRef<SVGSVGElement, ArrowLineRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLineRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLineRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLineRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLineRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowLineRightRegular ref={ref} {...rest} />;
}));

ArrowLineRight.displayName = 'ArrowLineRight';

export { ArrowLineRight };
