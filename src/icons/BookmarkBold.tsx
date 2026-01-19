import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookmarkBoldProps = Omit<IconBaseProps, 'children'>;

const BookmarkBold = memo(
  forwardRef<SVGSVGElement, BookmarkBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a5 5 0 0 1 5 5v14.25a2.5 2.5 0 0 1-4.12 1.9l-4.23-3.61a1 1 0 0 0-1.3 0l-4.23 3.6A2.5 2.5 0 0 1 3 20.25V6a5 5 0 0 1 5-5zM8 3a3 3 0 0 0-3 3v14.25c0 .42.5.65.83.38l4.22-3.61a3 3 0 0 1 3.9 0l4.22 3.6a.5.5 0 0 0 .83-.37V6a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookmarkBold.displayName = 'BookmarkBold';

// Triple export pattern (lucide-react style)
export { BookmarkBold, BookmarkBold as BookmarkBoldIcon, BookmarkBold as SiBookmarkBold };
export type { BookmarkBoldProps };
