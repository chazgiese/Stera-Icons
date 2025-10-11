import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailCheckIcon as MailCheckIconRegular } from './mail-check';
import { MailCheckIconBold } from './mail-check-bold';
import { MailCheckIconFilled } from './mail-check-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MailCheckIconProps extends IconProps {
  variant?: IconVariant;
}

const MailCheckIcon = memo(forwardRef<SVGSVGElement, MailCheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MailCheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MailCheckIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MailCheckIconRegular ref={ref} {...props} />;
  }
}));

MailCheckIcon.displayName = 'MailCheckIcon';

export { MailCheckIcon };
