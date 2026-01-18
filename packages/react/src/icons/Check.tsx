import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckRegular } from './CheckRegular';
import { CheckRegularDuotone } from './CheckRegularDuotone';
import { CheckBold } from './CheckBold';
import { CheckBoldDuotone } from './CheckBoldDuotone';
import { CheckFill } from './CheckFill';
import { CheckFillDuotone } from './CheckFillDuotone';

export interface CheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Check with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CheckRegular } from 'stera-icons/CheckRegular';
 */
const Check = memo(forwardRef<SVGSVGElement, CheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheckFill ref={ref} {...rest} />;
  if (duotone) return <CheckRegularDuotone ref={ref} {...rest} />;
  return <CheckRegular ref={ref} {...rest} />;
}));

Check.displayName = 'Check';

export { Check };
