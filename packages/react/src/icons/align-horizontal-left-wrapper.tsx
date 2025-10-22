import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignHorizontalLeftIcon as AlignHorizontalLeftIconRegular } from './align-horizontal-left';
import { AlignHorizontalLeftIconBold } from './align-horizontal-left-bold';
import { AlignHorizontalLeftIconFilled } from './align-horizontal-left-filled';
import { AlignHorizontalLeftIconFilltone } from './align-horizontal-left-filltone';
import { AlignHorizontalLeftIconLinetone } from './align-horizontal-left-linetone';

export interface AlignHorizontalLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignHorizontalLeftIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignHorizontalLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignHorizontalLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlignHorizontalLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignHorizontalLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignHorizontalLeftIconRegular ref={ref} {...props} />;
  }
}));

AlignHorizontalLeftIcon.displayName = 'AlignHorizontalLeftIcon';

export { AlignHorizontalLeftIcon };
