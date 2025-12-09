import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FinderIcon as RegularFinderIcon } from './finder';
import { FinderIconBold } from './finder-bold';
import { FinderIconFilled } from './finder-filled';
import { FinderIconFilltone } from './finder-filltone';
import { FinderIconLinetone } from './finder-linetone';

export interface FinderIconProps extends IconProps {
  variant?: IconVariant;
}

const FinderIcon = memo(forwardRef<SVGSVGElement, FinderIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FinderIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FinderIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FinderIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FinderIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFinderIcon ref={ref} {...props} />;
  }
}));

FinderIcon.displayName = 'FinderIcon';

export { FinderIcon };
