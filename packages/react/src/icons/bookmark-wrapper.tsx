import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookmarkIcon as BookmarkIconRegular } from './bookmark';
import { BookmarkIconBold } from './bookmark-bold';
import { BookmarkIconFilled } from './bookmark-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BookmarkIconProps extends IconProps {
  variant?: IconVariant;
}

const BookmarkIcon = memo(forwardRef<SVGSVGElement, BookmarkIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BookmarkIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BookmarkIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BookmarkIconRegular ref={ref} {...props} />;
  }
}));

BookmarkIcon.displayName = 'BookmarkIcon';

export { BookmarkIcon };
