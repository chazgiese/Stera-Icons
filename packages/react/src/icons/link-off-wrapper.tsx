import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LinkOffIcon as RegularLinkOffIcon } from './link-off';
import { LinkOffIconBold } from './link-off-bold';
import { LinkOffIconFilled } from './link-off-filled';
import { LinkOffIconFilltone } from './link-off-filltone';
import { LinkOffIconLinetone } from './link-off-linetone';

export interface LinkOffIconProps extends IconProps {
  variant?: IconVariant;
}

const LinkOffIcon = memo(forwardRef<SVGSVGElement, LinkOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LinkOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LinkOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LinkOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LinkOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLinkOffIcon ref={ref} {...props} />;
  }
}));

LinkOffIcon.displayName = 'LinkOffIcon';

export { LinkOffIcon };
