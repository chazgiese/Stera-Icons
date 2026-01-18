import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleUpRegular } from './ChevronCircleUpRegular';
import { ChevronCircleUpRegularDuotone } from './ChevronCircleUpRegularDuotone';
import { ChevronCircleUpBold } from './ChevronCircleUpBold';
import { ChevronCircleUpBoldDuotone } from './ChevronCircleUpBoldDuotone';
import { ChevronCircleUpFill } from './ChevronCircleUpFill';
import { ChevronCircleUpFillDuotone } from './ChevronCircleUpFillDuotone';

export interface ChevronCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleUpRegular } from 'stera-icons/ChevronCircleUpRegular';
 */
const ChevronCircleUp = memo(forwardRef<SVGSVGElement, ChevronCircleUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleUpRegular ref={ref} {...rest} />;
}));

ChevronCircleUp.displayName = 'ChevronCircleUp';

export { ChevronCircleUp };
