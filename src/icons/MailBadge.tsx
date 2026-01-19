import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailBadgeRegular } from './MailBadgeRegular';
import { MailBadgeRegularDuotone } from './MailBadgeRegularDuotone';
import { MailBadgeBold } from './MailBadgeBold';
import { MailBadgeBoldDuotone } from './MailBadgeBoldDuotone';
import { MailBadgeFill } from './MailBadgeFill';
import { MailBadgeFillDuotone } from './MailBadgeFillDuotone';

export interface MailBadgeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailBadge - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MailBadgeRegular } from 'stera-icons/icons/MailBadgeRegular';
 */
const MailBadge = memo(forwardRef<SVGSVGElement, MailBadgeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailBadgeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailBadgeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailBadgeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailBadgeFill ref={ref} {...rest} />;
  if (duotone) return <MailBadgeRegularDuotone ref={ref} {...rest} />;
  return <MailBadgeRegular ref={ref} {...rest} />;
}));

MailBadge.displayName = 'MailBadge';

// Triple export pattern (lucide-react style)
export { MailBadge, MailBadge as MailBadgeIcon, MailBadge as SiMailBadge };
export default MailBadge;
