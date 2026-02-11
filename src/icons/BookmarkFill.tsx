import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkFillProps = Omit<IconBaseProps, 'children'>;

const BookmarkFill = memo(
  forwardRef<SVGSVGElement, BookmarkFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-fill" {...props}>
      <path d="M12.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v9.24q0 .89-.03 1.48c-.04.36-.11.87-.45 1.26a2 2 0 0 1-1.68.7 2.2 2.2 0 0 1-1.2-.58q-.45-.39-1.08-1.02l-2-2.01c-.41-.4-.68-.67-.9-.85-.2-.18-.3-.23-.35-.24a1 1 0 0 0-.62 0c-.05.01-.15.06-.36.24q-.3.25-.89.85l-2 2q-.62.64-1.08 1.03c-.27.23-.68.54-1.2.58a2 2 0 0 1-1.68-.7c-.34-.4-.41-.9-.45-1.26Q4 19.52 4 18.64V9.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q9.75 1.99 11.4 2z" />
    </IconBase>
  ))
);

BookmarkFill.displayName = 'BookmarkFill';

// Triple export pattern (lucide-react style)
export { BookmarkFill, BookmarkFill as BookmarkFillIcon, BookmarkFill as SiBookmarkFill };
export default BookmarkFill;
export type { BookmarkFillProps };
