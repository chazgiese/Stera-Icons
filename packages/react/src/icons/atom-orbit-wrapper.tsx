import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomOrbitIcon as AtomOrbitIconRegular } from './atom-orbit';
import { AtomOrbitIconBold } from './atom-orbit-bold';
import { AtomOrbitIconFilled } from './atom-orbit-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AtomOrbitIconRegular ref={ref} {...props} />;
  }
}));

AtomOrbitIcon.displayName = 'AtomOrbitIcon';

export { AtomOrbitIcon };
