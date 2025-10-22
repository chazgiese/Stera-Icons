import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailBadgeIcon as RegularMailBadgeIcon } from './mail-badge';
import { MailBadgeIconBold } from './mail-badge-bold';
import { MailBadgeIconFilled } from './mail-badge-filled';
import { MailBadgeIconFilltone } from './mail-badge-filltone';
import { MailBadgeIconLinetone } from './mail-badge-linetone';

export interface MailBadgeIconProps extends IconProps {
  variant?: IconVariant;
}

const MailBadgeIcon = memo(forwardRef<SVGSVGElement, MailBadgeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailBadgeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailBadgeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MailBadgeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailBadgeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailBadgeIcon ref={ref} {...props} />;
  }
}));

MailBadgeIcon.displayName = 'MailBadgeIcon';

export { MailBadgeIcon };
