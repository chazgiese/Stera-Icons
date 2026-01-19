import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookClosedFillProps = Omit<IconBaseProps, 'children'>;

const BookClosedFill = memo(
  forwardRef<SVGSVGElement, BookClosedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.6 1q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T21 4.4V17a1 1 0 0 1-1 1c-.36 0-1 .45-1 1.5s.64 1.5 1 1.5a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 19.5V7.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q8.16 1 9.6 1zM6.5 18a1.5 1.5 0 0 0 0 3h10.8a4 4 0 0 1 0-3zM8 10a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedFill.displayName = 'BookClosedFill';

// Triple export pattern (lucide-react style)
export { BookClosedFill, BookClosedFill as BookClosedFillIcon, BookClosedFill as SiBookClosedFill };
export default BookClosedFill;
export type { BookClosedFillProps };
