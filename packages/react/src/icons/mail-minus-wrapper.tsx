import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MailMinusIcon as RegularMailMinusIcon } from './mail-minus';
import { MailMinusIconBold } from './mail-minus-bold';
import { MailMinusIconFilled } from './mail-minus-filled';
import { MailMinusIconFilltone } from './mail-minus-filltone';
import { MailMinusIconLinetone } from './mail-minus-linetone';

export interface MailMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const MailMinusIcon = memo(forwardRef<SVGSVGElement, MailMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MailMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MailMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMailMinusIcon ref={ref} {...props} />;
  }
}));

MailMinusIcon.displayName = 'MailMinusIcon';

export { MailMinusIcon };
