import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutMasonryIcon as RegularLayoutMasonryIcon } from './layout-masonry';
import { LayoutMasonryIconDuotone as LayoutMasonryIconDuotone } from './layout-masonry-duotone';
import { LayoutMasonryIconBold as LayoutMasonryIconBold } from './layout-masonry-bold';
import { LayoutMasonryIconBoldDuotone as LayoutMasonryIconBoldDuotone } from './layout-masonry-bold-duotone';
import { LayoutMasonryIconFill as LayoutMasonryIconFill } from './layout-masonry-fill';
import { LayoutMasonryIconFillDuotone as LayoutMasonryIconFillDuotone } from './layout-masonry-fill-duotone';

export interface LayoutMasonryIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutMasonryIcon = memo(forwardRef<SVGSVGElement, LayoutMasonryIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutMasonryIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutMasonryIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutMasonryIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutMasonryIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutMasonryIconDuotone ref={ref} {...props} />;
  return <RegularLayoutMasonryIcon ref={ref} {...props} />;
}));

LayoutMasonryIcon.displayName = 'LayoutMasonryIcon';

export { LayoutMasonryIcon };
