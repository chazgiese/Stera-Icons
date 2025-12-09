import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailXIcon as RegularMailXIcon } from './mail-x';
import { MailXIconBold } from './mail-x-bold';
import { MailXIconFilled } from './mail-x-filled';
import { MailXIconFilltone } from './mail-x-filltone';
import { MailXIconLinetone } from './mail-x-linetone';

export interface MailXIconProps extends IconProps {
  variant?: IconVariant;
}

const MailXIcon = memo(forwardRef<SVGSVGElement, MailXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MailXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailXIcon ref={ref} {...props} />;
  }
}));

MailXIcon.displayName = 'MailXIcon';

export { MailXIcon };
