import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailBadgeIcon as RegularMailBadgeIcon } from './mail-badge';
import { MailBadgeIconDuotone as MailBadgeIconDuotone } from './mail-badge-duotone';
import { MailBadgeIconBold as MailBadgeIconBold } from './mail-badge-bold';
import { MailBadgeIconBoldDuotone as MailBadgeIconBoldDuotone } from './mail-badge-bold-duotone';
import { MailBadgeIconFill as MailBadgeIconFill } from './mail-badge-fill';
import { MailBadgeIconFillDuotone as MailBadgeIconFillDuotone } from './mail-badge-fill-duotone';

export interface MailBadgeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailBadgeIcon = memo(forwardRef<SVGSVGElement, MailBadgeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailBadgeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailBadgeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailBadgeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailBadgeIconFill ref={ref} {...props} />;
  if (duotone) return <MailBadgeIconDuotone ref={ref} {...props} />;
  return <RegularMailBadgeIcon ref={ref} {...props} />;
}));

MailBadgeIcon.displayName = 'MailBadgeIcon';

export { MailBadgeIcon };
