import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookmarkRegularProps = Omit<IconBaseProps, 'children'>;

const BookmarkRegular = memo(
  forwardRef<SVGSVGElement, BookmarkRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1.25A4.75 4.75 0 0 1 20.75 6v14.25a2.25 2.25 0 0 1-3.71 1.7l-4.23-3.6c-.47-.4-1.15-.4-1.62 0l-4.23 3.6a2.25 2.25 0 0 1-3.71-1.7V6A4.75 4.75 0 0 1 8 1.25zm-8 1.5A3.25 3.25 0 0 0 4.75 6v14.25c0 .64.75.98 1.24.57l4.22-3.61a2.75 2.75 0 0 1 3.58 0L18 20.8a.75.75 0 0 0 1.24-.56V6c0-1.8-1.46-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookmarkRegular.displayName = 'BookmarkRegular';

// Triple export pattern (lucide-react style)
export { BookmarkRegular, BookmarkRegular as BookmarkRegularIcon, BookmarkRegular as SiBookmarkRegular };
export default BookmarkRegular;
export type { BookmarkRegularProps };
