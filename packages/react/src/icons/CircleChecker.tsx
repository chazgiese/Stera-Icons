import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleCheckerRegular } from './CircleCheckerRegular';
import { CircleCheckerRegularDuotone } from './CircleCheckerRegularDuotone';
import { CircleCheckerBold } from './CircleCheckerBold';
import { CircleCheckerBoldDuotone } from './CircleCheckerBoldDuotone';
import { CircleCheckerFill } from './CircleCheckerFill';
import { CircleCheckerFillDuotone } from './CircleCheckerFillDuotone';

export interface CircleCheckerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleChecker with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CircleCheckerRegular } from 'stera-icons/CircleCheckerRegular';
 */
const CircleChecker = memo(forwardRef<SVGSVGElement, CircleCheckerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleCheckerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleCheckerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleCheckerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleCheckerFill ref={ref} {...rest} />;
  if (duotone) return <CircleCheckerRegularDuotone ref={ref} {...rest} />;
  return <CircleCheckerRegular ref={ref} {...rest} />;
}));

CircleChecker.displayName = 'CircleChecker';

export { CircleChecker };
