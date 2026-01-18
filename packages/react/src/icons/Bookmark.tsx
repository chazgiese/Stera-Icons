import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BookmarkRegular } from './BookmarkRegular';
import { BookmarkRegularDuotone } from './BookmarkRegularDuotone';
import { BookmarkBold } from './BookmarkBold';
import { BookmarkBoldDuotone } from './BookmarkBoldDuotone';
import { BookmarkFill } from './BookmarkFill';
import { BookmarkFillDuotone } from './BookmarkFillDuotone';

export interface BookmarkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bookmark with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BookmarkRegular } from 'stera-icons/BookmarkRegular';
 */
const Bookmark = memo(forwardRef<SVGSVGElement, BookmarkProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BookmarkBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BookmarkBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BookmarkFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BookmarkFill ref={ref} {...rest} />;
  if (duotone) return <BookmarkRegularDuotone ref={ref} {...rest} />;
  return <BookmarkRegular ref={ref} {...rest} />;
}));

Bookmark.displayName = 'Bookmark';

export { Bookmark };
