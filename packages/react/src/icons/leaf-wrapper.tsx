import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LeafIcon as RegularLeafIcon } from './leaf';
import { LeafIconBold } from './leaf-bold';
import { LeafIconFilled } from './leaf-filled';
import { LeafIconFilltone } from './leaf-filltone';
import { LeafIconLinetone } from './leaf-linetone';

export interface LeafIconProps extends IconProps {
  variant?: IconVariant;
}

const LeafIcon = memo(forwardRef<SVGSVGElement, LeafIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LeafIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LeafIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LeafIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LeafIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLeafIcon ref={ref} {...props} />;
  }
}));

LeafIcon.displayName = 'LeafIcon';

export { LeafIcon };
