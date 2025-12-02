import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutMasonryIcon as RegularLayoutMasonryIcon } from './layout-masonry';
import { LayoutMasonryIconBold } from './layout-masonry-bold';
import { LayoutMasonryIconFilled } from './layout-masonry-filled';
import { LayoutMasonryIconFilltone } from './layout-masonry-filltone';
import { LayoutMasonryIconLinetone } from './layout-masonry-linetone';

export interface LayoutMasonryIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutMasonryIcon = memo(forwardRef<SVGSVGElement, LayoutMasonryIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutMasonryIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutMasonryIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutMasonryIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutMasonryIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutMasonryIcon ref={ref} {...props} />;
  }
}));

LayoutMasonryIcon.displayName = 'LayoutMasonryIcon';

export { LayoutMasonryIcon };
