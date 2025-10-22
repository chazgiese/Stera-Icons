import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignVerticalTopIcon as RegularAlignVerticalTopIcon } from './align-vertical-top';
import { AlignVerticalTopIconBold } from './align-vertical-top-bold';
import { AlignVerticalTopIconFilled } from './align-vertical-top-filled';
import { AlignVerticalTopIconFilltone } from './align-vertical-top-filltone';
import { AlignVerticalTopIconLinetone } from './align-vertical-top-linetone';

export interface AlignVerticalTopIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignVerticalTopIcon = memo(forwardRef<SVGSVGElement, AlignVerticalTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignVerticalTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignVerticalTopIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlignVerticalTopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignVerticalTopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlignVerticalTopIcon ref={ref} {...props} />;
  }
}));

AlignVerticalTopIcon.displayName = 'AlignVerticalTopIcon';

export { AlignVerticalTopIcon };
