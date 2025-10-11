import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TagIcon as TagIconRegular } from './tag';
import { TagIconBold } from './tag-bold';
import { TagIconFilled } from './tag-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TagIconProps extends IconProps {
  variant?: IconVariant;
}

const TagIcon = memo(forwardRef<SVGSVGElement, TagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TagIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TagIconRegular ref={ref} {...props} />;
  }
}));

TagIcon.displayName = 'TagIcon';

export { TagIcon };
