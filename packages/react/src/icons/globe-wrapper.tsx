import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GlobeIcon as GlobeIconRegular } from './globe';
import { GlobeIconBold } from './globe-bold';
import { GlobeIconFilled } from './globe-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GlobeIconProps extends IconProps {
  variant?: IconVariant;
}

const GlobeIcon = memo(forwardRef<SVGSVGElement, GlobeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GlobeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GlobeIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GlobeIconRegular ref={ref} {...props} />;
  }
}));

GlobeIcon.displayName = 'GlobeIcon';

export { GlobeIcon };
