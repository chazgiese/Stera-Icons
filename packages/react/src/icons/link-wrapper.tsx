import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LinkIcon as LinkIconRegular } from './link';
import { LinkIconBold } from './link-bold';
import { LinkIconFilled } from './link-filled';
import { LinkIconFilltone } from './link-filltone';
import { LinkIconLinetone } from './link-linetone';

export interface LinkIconProps extends IconProps {
  variant?: IconVariant;
}

const LinkIcon = memo(forwardRef<SVGSVGElement, LinkIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LinkIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LinkIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LinkIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LinkIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LinkIconRegular ref={ref} {...props} />;
  }
}));

LinkIcon.displayName = 'LinkIcon';

export { LinkIcon };
