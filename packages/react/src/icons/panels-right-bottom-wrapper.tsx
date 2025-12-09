import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelsRightBottomIcon as RegularPanelsRightBottomIcon } from './panels-right-bottom';
import { PanelsRightBottomIconBold } from './panels-right-bottom-bold';
import { PanelsRightBottomIconFilled } from './panels-right-bottom-filled';
import { PanelsRightBottomIconFilltone } from './panels-right-bottom-filltone';
import { PanelsRightBottomIconLinetone } from './panels-right-bottom-linetone';

export interface PanelsRightBottomIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelsRightBottomIcon = memo(forwardRef<SVGSVGElement, PanelsRightBottomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelsRightBottomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelsRightBottomIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelsRightBottomIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelsRightBottomIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelsRightBottomIcon ref={ref} {...props} />;
  }
}));

PanelsRightBottomIcon.displayName = 'PanelsRightBottomIcon';

export { PanelsRightBottomIcon };
