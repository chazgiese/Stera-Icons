import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronRightRegular } from './ChevronRightRegular';
import { ChevronRightRegularDuotone } from './ChevronRightRegularDuotone';
import { ChevronRightBold } from './ChevronRightBold';
import { ChevronRightBoldDuotone } from './ChevronRightBoldDuotone';
import { ChevronRightFill } from './ChevronRightFill';
import { ChevronRightFillDuotone } from './ChevronRightFillDuotone';

export interface ChevronRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronRightRegular } from 'stera-icons/ChevronRightRegular';
 */
const ChevronRight = memo(forwardRef<SVGSVGElement, ChevronRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronRightRegular ref={ref} {...rest} />;
}));

ChevronRight.displayName = 'ChevronRight';

export { ChevronRight };
