import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignVerticalBottomIcon as AlignVerticalBottomIconRegular } from './align-vertical-bottom';
import { AlignVerticalBottomIconBold } from './align-vertical-bottom-bold';
import { AlignVerticalBottomIconFilled } from './align-vertical-bottom-filled';
import { AlignVerticalBottomIconFilltone } from './align-vertical-bottom-filltone';
import { AlignVerticalBottomIconLinetone } from './align-vertical-bottom-linetone';

export interface AlignVerticalBottomIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignVerticalBottomIcon = memo(forwardRef<SVGSVGElement, AlignVerticalBottomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignVerticalBottomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignVerticalBottomIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlignVerticalBottomIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignVerticalBottomIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignVerticalBottomIconRegular ref={ref} {...props} />;
  }
}));

AlignVerticalBottomIcon.displayName = 'AlignVerticalBottomIcon';

export { AlignVerticalBottomIcon };
