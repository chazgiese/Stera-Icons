import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckBadgeRegular } from './CheckBadgeRegular';
import { CheckBadgeRegularDuotone } from './CheckBadgeRegularDuotone';
import { CheckBadgeBold } from './CheckBadgeBold';
import { CheckBadgeBoldDuotone } from './CheckBadgeBoldDuotone';
import { CheckBadgeFill } from './CheckBadgeFill';
import { CheckBadgeFillDuotone } from './CheckBadgeFillDuotone';

export interface CheckBadgeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CheckBadge with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CheckBadgeRegular } from 'stera-icons/CheckBadgeRegular';
 */
const CheckBadge = memo(forwardRef<SVGSVGElement, CheckBadgeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckBadgeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheckBadgeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheckBadgeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheckBadgeFill ref={ref} {...rest} />;
  if (duotone) return <CheckBadgeRegularDuotone ref={ref} {...rest} />;
  return <CheckBadgeRegular ref={ref} {...rest} />;
}));

CheckBadge.displayName = 'CheckBadge';

export { CheckBadge };
