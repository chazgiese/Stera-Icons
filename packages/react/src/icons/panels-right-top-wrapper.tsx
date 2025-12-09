import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelsRightTopIcon as RegularPanelsRightTopIcon } from './panels-right-top';
import { PanelsRightTopIconBold } from './panels-right-top-bold';
import { PanelsRightTopIconFilled } from './panels-right-top-filled';
import { PanelsRightTopIconFilltone } from './panels-right-top-filltone';
import { PanelsRightTopIconLinetone } from './panels-right-top-linetone';

export interface PanelsRightTopIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelsRightTopIcon = memo(forwardRef<SVGSVGElement, PanelsRightTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelsRightTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelsRightTopIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelsRightTopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelsRightTopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelsRightTopIcon ref={ref} {...props} />;
  }
}));

PanelsRightTopIcon.displayName = 'PanelsRightTopIcon';

export { PanelsRightTopIcon };
