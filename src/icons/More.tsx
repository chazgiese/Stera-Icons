import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreRegular } from './MoreRegular';
import { MoreRegularDuotone } from './MoreRegularDuotone';
import { MoreBold } from './MoreBold';
import { MoreBoldDuotone } from './MoreBoldDuotone';
import { MoreFill } from './MoreFill';
import { MoreFillDuotone } from './MoreFillDuotone';

export interface MoreProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * More - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreRegular } from 'stera-icons/icons/MoreRegular';
 */
const More = memo(forwardRef<SVGSVGElement, MoreProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreFill ref={ref} {...rest} />;
  if (duotone) return <MoreRegularDuotone ref={ref} {...rest} />;
  return <MoreRegular ref={ref} {...rest} />;
}));

More.displayName = 'More';

// Triple export pattern (lucide-react style)
export { More, More as MoreIcon, More as SiMore };
