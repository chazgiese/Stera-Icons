import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedFillProps = Omit<IconBaseProps, 'children'>;

const BookClosedFill = memo(
  forwardRef<SVGSVGElement, BookClosedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-fill" {...props}>
      <path fillRule="evenodd" d="M17 2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v11.5a1 1 0 0 1-1 1c-.25 0-.8.34-.8 1.25S18.75 20 19 20a1 1 0 1 1 0 2H7.25A3.25 3.25 0 0 1 4 18.75V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM7.25 17.5a1.25 1.25 0 1 0 0 2.5h9.17a3.7 3.7 0 0 1 0-2.5zM9 10.1a.9.9 0 0 0 0 1.8h4a.9.9 0 0 0 0-1.8zm0-3.5a.9.9 0 0 0 0 1.8h6a.9.9 0 0 0 0-1.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedFill.displayName = 'BookClosedFill';

// Triple export pattern (lucide-react style)
export { BookClosedFill, BookClosedFill as BookClosedFillIcon, BookClosedFill as SiBookClosedFill };
export default BookClosedFill;
export type { BookClosedFillProps };
