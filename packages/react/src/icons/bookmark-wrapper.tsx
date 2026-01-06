import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookmarkIcon as RegularBookmarkIcon } from './bookmark';
import { BookmarkIconDuotone as BookmarkIconDuotone } from './bookmark-duotone';
import { BookmarkIconBold as BookmarkIconBold } from './bookmark-bold';
import { BookmarkIconBoldDuotone as BookmarkIconBoldDuotone } from './bookmark-bold-duotone';
import { BookmarkIconFill as BookmarkIconFill } from './bookmark-fill';
import { BookmarkIconFillDuotone as BookmarkIconFillDuotone } from './bookmark-fill-duotone';

export interface BookmarkIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BookmarkIcon = memo(forwardRef<SVGSVGElement, BookmarkIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookmarkIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BookmarkIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BookmarkIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BookmarkIconFill ref={ref} {...props} />;
  if (duotone) return <BookmarkIconDuotone ref={ref} {...props} />;
  return <RegularBookmarkIcon ref={ref} {...props} />;
}));

BookmarkIcon.displayName = 'BookmarkIcon';

export { BookmarkIcon };
