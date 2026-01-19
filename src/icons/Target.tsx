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
 * Target - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TargetRegular } from 'stera-icons/icons/TargetRegular';
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

// Triple export pattern (lucide-react style)
export { Target, Target as TargetIcon, Target as SiTarget };
