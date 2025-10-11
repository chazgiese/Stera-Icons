import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailOpenIcon as MailOpenIconRegular } from './mail-open';
import { MailOpenIconBold } from './mail-open-bold';
import { MailOpenIconFilled } from './mail-open-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MailOpenIconRegular ref={ref} {...props} />;
  }
}));

MailOpenIcon.displayName = 'MailOpenIcon';

export { MailOpenIcon };
