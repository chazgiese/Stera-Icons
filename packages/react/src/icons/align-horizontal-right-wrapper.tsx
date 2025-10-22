import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignHorizontalRightIcon as RegularAlignHorizontalRightIcon } from './align-horizontal-right';
import { AlignHorizontalRightIconBold } from './align-horizontal-right-bold';
import { AlignHorizontalRightIconFilled } from './align-horizontal-right-filled';
import { AlignHorizontalRightIconFilltone } from './align-horizontal-right-filltone';
import { AlignHorizontalRightIconLinetone } from './align-horizontal-right-linetone';

export interface AlignHorizontalRightIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignHorizontalRightIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignHorizontalRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignHorizontalRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlignHorizontalRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignHorizontalRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlignHorizontalRightIcon ref={ref} {...props} />;
  }
}));

AlignHorizontalRightIcon.displayName = 'AlignHorizontalRightIcon';

export { AlignHorizontalRightIcon };
