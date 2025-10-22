import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailIcon as RegularMailIcon } from './mail';
import { MailIconBold } from './mail-bold';
import { MailIconFilled } from './mail-filled';
import { MailIconFilltone } from './mail-filltone';
import { MailIconLinetone } from './mail-linetone';

export interface MailIconProps extends IconProps {
  variant?: IconVariant;
}

const MailIcon = memo(forwardRef<SVGSVGElement, MailIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MailIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailIcon ref={ref} {...props} />;
  }
}));

MailIcon.displayName = 'MailIcon';

export { MailIcon };
