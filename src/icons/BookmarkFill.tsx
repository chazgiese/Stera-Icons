import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookmarkFillProps = Omit<IconBaseProps, 'children'>;

const BookmarkFill = memo(
  forwardRef<SVGSVGElement, BookmarkFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-fill" {...props}>
      <path fill="currentColor" d="M16 1a5 5 0 0 1 5 5v14.25a2.5 2.5 0 0 1-4.12 1.9l-4.23-3.61a1 1 0 0 0-1.3 0l-4.23 3.6A2.5 2.5 0 0 1 3 20.25V6a5 5 0 0 1 5-5z" />
    </IconBase>
  ))
);

BookmarkFill.displayName = 'BookmarkFill';

// Triple export pattern (lucide-react style)
export { BookmarkFill, BookmarkFill as BookmarkFillIcon, BookmarkFill as SiBookmarkFill };
export default BookmarkFill;
export type { BookmarkFillProps };
