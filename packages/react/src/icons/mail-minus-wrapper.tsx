import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailMinusIcon as MailMinusIconRegular } from './mail-minus';
import { MailMinusIconBold } from './mail-minus-bold';
import { MailMinusIconFilled } from './mail-minus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MailMinusIconRegular ref={ref} {...props} />;
  }
}));

MailMinusIcon.displayName = 'MailMinusIcon';

export { MailMinusIcon };
