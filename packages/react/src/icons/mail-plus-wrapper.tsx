import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailPlusIcon as RegularMailPlusIcon } from './mail-plus';
import { MailPlusIconBold } from './mail-plus-bold';
import { MailPlusIconFilled } from './mail-plus-filled';
import { MailPlusIconFilltone } from './mail-plus-filltone';
import { MailPlusIconLinetone } from './mail-plus-linetone';

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
    case 'filltone':
      return <MailPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailPlusIcon ref={ref} {...props} />;
  }
}));

MailPlusIcon.displayName = 'MailPlusIcon';

export { MailPlusIcon };
