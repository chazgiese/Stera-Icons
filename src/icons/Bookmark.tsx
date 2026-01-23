import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BookmarkRegular } from './BookmarkRegular.js';
import { BookmarkRegularDuotone } from './BookmarkRegularDuotone.js';
import { BookmarkBold } from './BookmarkBold.js';
import { BookmarkBoldDuotone } from './BookmarkBoldDuotone.js';
import { BookmarkFill } from './BookmarkFill.js';
import { BookmarkFillDuotone } from './BookmarkFillDuotone.js';

export interface BookmarkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bookmark - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BookmarkRegular } from 'stera-icons/icons/BookmarkRegular';
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

// Triple export pattern (lucide-react style)
export { Bookmark, Bookmark as BookmarkIcon, Bookmark as SiBookmark };
export default Bookmark;
