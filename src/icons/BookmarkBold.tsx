import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkBoldProps = Omit<IconBaseProps, 'children'>;

const BookmarkBold = memo(
  forwardRef<SVGSVGElement, BookmarkBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-bold" {...props}>
      <path fillRule="evenodd" d="M12.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v9.24q0 .89-.03 1.48c-.04.36-.11.87-.45 1.26a2 2 0 0 1-1.68.7 2.2 2.2 0 0 1-1.2-.58q-.45-.39-1.08-1.02l-2-2.01c-.41-.4-.68-.67-.9-.85-.2-.18-.3-.23-.35-.24a1 1 0 0 0-.62 0c-.05.01-.15.06-.36.24q-.3.25-.89.85l-2 2q-.62.64-1.08 1.03c-.27.23-.68.54-1.2.58a2 2 0 0 1-1.68-.7c-.34-.4-.41-.9-.45-1.26Q4 19.52 4 18.64V9.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q9.75 1.99 11.4 2zm-1.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C6 7.47 6 8.26 6 9.4v9.24c0 .62 0 1.02.03 1.3V20q.02 0 .05-.03c.22-.18.5-.47.94-.9l2.01-2.01q.57-.59 1-.97.45-.4 1.04-.61a3 3 0 0 1 1.86 0q.59.2 1.03.61.45.38 1.01.97l2 2c.45.44.73.73.95.91l.05.03v-.05c.03-.29.03-.69.03-1.31V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C14.53 4 13.74 4 12.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookmarkBold.displayName = 'BookmarkBold';

// Triple export pattern (lucide-react style)
export { BookmarkBold, BookmarkBold as BookmarkBoldIcon, BookmarkBold as SiBookmarkBold };
export default BookmarkBold;
export type { BookmarkBoldProps };
