import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailPlusIcon as MailPlusIconRegular } from './mail-plus';
import { MailPlusIconBold } from './mail-plus-bold';
import { MailPlusIconFilled } from './mail-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MailPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const MailPlusIcon = memo(forwardRef<SVGSVGElement, MailPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailPlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MailPlusIconRegular ref={ref} {...props} />;
  }
}));

MailPlusIcon.displayName = 'MailPlusIcon';

export { MailPlusIcon };
