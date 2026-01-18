import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TargetRegular } from './TargetRegular';
import { TargetRegularDuotone } from './TargetRegularDuotone';
import { TargetBold } from './TargetBold';
import { TargetBoldDuotone } from './TargetBoldDuotone';
import { TargetFill } from './TargetFill';
import { TargetFillDuotone } from './TargetFillDuotone';

export interface TargetProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Target with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TargetRegular } from 'stera-icons/TargetRegular';
 */
const Target = memo(forwardRef<SVGSVGElement, TargetProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TargetBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TargetBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TargetFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TargetFill ref={ref} {...rest} />;
  if (duotone) return <TargetRegularDuotone ref={ref} {...rest} />;
  return <TargetRegular ref={ref} {...rest} />;
}));

Target.displayName = 'Target';

export { Target };
