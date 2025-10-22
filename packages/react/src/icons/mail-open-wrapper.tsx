import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailOpenIcon as RegularMailOpenIcon } from './mail-open';
import { MailOpenIconBold } from './mail-open-bold';
import { MailOpenIconFilled } from './mail-open-filled';
import { MailOpenIconFilltone } from './mail-open-filltone';
import { MailOpenIconLinetone } from './mail-open-linetone';

export interface MailOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const MailOpenIcon = memo(forwardRef<SVGSVGElement, MailOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailOpenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MailOpenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailOpenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailOpenIcon ref={ref} {...props} />;
  }
}));

MailOpenIcon.displayName = 'MailOpenIcon';

export { MailOpenIcon };
