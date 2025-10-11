import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailSlashIcon as MailSlashIconRegular } from './mail-slash';
import { MailSlashIconBold } from './mail-slash-bold';
import { MailSlashIconFilled } from './mail-slash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MailSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const MailSlashIcon = memo(forwardRef<SVGSVGElement, MailSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailSlashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MailSlashIconRegular ref={ref} {...props} />;
  }
}));

MailSlashIcon.displayName = 'MailSlashIcon';

export { MailSlashIcon };
