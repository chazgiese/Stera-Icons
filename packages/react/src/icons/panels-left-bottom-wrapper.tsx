import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelsLeftBottomIcon as RegularPanelsLeftBottomIcon } from './panels-left-bottom';
import { PanelsLeftBottomIconBold } from './panels-left-bottom-bold';
import { PanelsLeftBottomIconFilled } from './panels-left-bottom-filled';
import { PanelsLeftBottomIconFilltone } from './panels-left-bottom-filltone';
import { PanelsLeftBottomIconLinetone } from './panels-left-bottom-linetone';

export interface PanelsLeftBottomIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelsLeftBottomIcon = memo(forwardRef<SVGSVGElement, PanelsLeftBottomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelsLeftBottomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelsLeftBottomIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelsLeftBottomIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelsLeftBottomIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelsLeftBottomIcon ref={ref} {...props} />;
  }
}));

PanelsLeftBottomIcon.displayName = 'PanelsLeftBottomIcon';

export { PanelsLeftBottomIcon };
