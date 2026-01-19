import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleVRegular } from './MoreCircleVRegular';
import { MoreCircleVRegularDuotone } from './MoreCircleVRegularDuotone';
import { MoreCircleVBold } from './MoreCircleVBold';
import { MoreCircleVBoldDuotone } from './MoreCircleVBoldDuotone';
import { MoreCircleVFill } from './MoreCircleVFill';
import { MoreCircleVFillDuotone } from './MoreCircleVFillDuotone';

export interface MoreCircleVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreCircleV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreCircleVRegular } from 'stera-icons/icons/MoreCircleVRegular';
 */
const MoreCircleV = memo(forwardRef<SVGSVGElement, MoreCircleVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreCircleVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreCircleVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreCircleVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreCircleVFill ref={ref} {...rest} />;
  if (duotone) return <MoreCircleVRegularDuotone ref={ref} {...rest} />;
  return <MoreCircleVRegular ref={ref} {...rest} />;
}));

MoreCircleV.displayName = 'MoreCircleV';

// Triple export pattern (lucide-react style)
export { MoreCircleV, MoreCircleV as MoreCircleVIcon, MoreCircleV as SiMoreCircleV };
