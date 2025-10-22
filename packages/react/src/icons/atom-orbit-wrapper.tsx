import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AtomOrbitIcon as AtomOrbitIconRegular } from './atom-orbit';
import { AtomOrbitIconBold } from './atom-orbit-bold';
import { AtomOrbitIconFilled } from './atom-orbit-filled';
import { AtomOrbitIconFilltone } from './atom-orbit-filltone';
import { AtomOrbitIconLinetone } from './atom-orbit-linetone';

export interface AtomOrbitIconProps extends IconProps {
  variant?: IconVariant;
}

const AtomOrbitIcon = memo(forwardRef<SVGSVGElement, AtomOrbitIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AtomOrbitIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AtomOrbitIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AtomOrbitIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AtomOrbitIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AtomOrbitIconRegular ref={ref} {...props} />;
  }
}));

AtomOrbitIcon.displayName = 'AtomOrbitIcon';

export { AtomOrbitIcon };
