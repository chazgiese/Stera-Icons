import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailXIcon as MailXIconRegular } from './mail-x';
import { MailXIconBold } from './mail-x-bold';
import { MailXIconFilled } from './mail-x-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MailXIconRegular ref={ref} {...props} />;
  }
}));

MailXIcon.displayName = 'MailXIcon';

export { MailXIcon };
