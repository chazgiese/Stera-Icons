import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GhostIcon as GhostIconRegular } from './ghost';
import { GhostIconBold } from './ghost-bold';
import { GhostIconFilled } from './ghost-filled';
import { GhostIconFilltone } from './ghost-filltone';
import { GhostIconLinetone } from './ghost-linetone';

export interface GhostIconProps extends IconProps {
  variant?: IconVariant;
}

const GhostIcon = memo(forwardRef<SVGSVGElement, GhostIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GhostIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GhostIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GhostIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GhostIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <GhostIconRegular ref={ref} {...props} />;
  }
}));

GhostIcon.displayName = 'GhostIcon';

export { GhostIcon };
