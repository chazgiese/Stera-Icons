import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullRightRegular } from './ChevronFullRightRegular';
import { ChevronFullRightRegularDuotone } from './ChevronFullRightRegularDuotone';
import { ChevronFullRightBold } from './ChevronFullRightBold';
import { ChevronFullRightBoldDuotone } from './ChevronFullRightBoldDuotone';
import { ChevronFullRightFill } from './ChevronFullRightFill';
import { ChevronFullRightFillDuotone } from './ChevronFullRightFillDuotone';

export interface ChevronFullRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullRightRegular } from 'stera-icons/ChevronFullRightRegular';
 */
const ChevronFullRight = memo(forwardRef<SVGSVGElement, ChevronFullRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullRightRegular ref={ref} {...rest} />;
}));

ChevronFullRight.displayName = 'ChevronFullRight';

export { ChevronFullRight };
