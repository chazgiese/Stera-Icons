import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BookmarkIcon as BookmarkIconRegular } from './bookmark';
import { BookmarkIconBold } from './bookmark-bold';
import { BookmarkIconFilled } from './bookmark-filled';
import { BookmarkIconFilltone } from './bookmark-filltone';
import { BookmarkIconLinetone } from './bookmark-linetone';

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
    case 'filltone':
      return <BookmarkIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BookmarkIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BookmarkIconRegular ref={ref} {...props} />;
  }
}));

BookmarkIcon.displayName = 'BookmarkIcon';

export { BookmarkIcon };
