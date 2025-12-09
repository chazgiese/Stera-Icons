import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelsLeftTopIcon as RegularPanelsLeftTopIcon } from './panels-left-top';
import { PanelsLeftTopIconBold } from './panels-left-top-bold';
import { PanelsLeftTopIconFilled } from './panels-left-top-filled';
import { PanelsLeftTopIconFilltone } from './panels-left-top-filltone';
import { PanelsLeftTopIconLinetone } from './panels-left-top-linetone';

export interface PanelsLeftTopIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelsLeftTopIcon = memo(forwardRef<SVGSVGElement, PanelsLeftTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelsLeftTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelsLeftTopIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelsLeftTopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelsLeftTopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelsLeftTopIcon ref={ref} {...props} />;
  }
}));

PanelsLeftTopIcon.displayName = 'PanelsLeftTopIcon';

export { PanelsLeftTopIcon };
