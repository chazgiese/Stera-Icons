import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, BookClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.6 1q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T21 4.4V17a1 1 0 0 1-1 1c-.36 0-1 .45-1 1.5s.64 1.5 1 1.5a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 19.5V7.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q8.16 1 9.6 1zM6.5 18a1.5 1.5 0 0 0 0 3h10.8a4 4 0 0 1 0-3zM8 10a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 10a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 6a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BookClosedFillDuotone.displayName = 'BookClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { BookClosedFillDuotone, BookClosedFillDuotone as BookClosedFillDuotoneIcon, BookClosedFillDuotone as SiBookClosedFillDuotone };
export default BookClosedFillDuotone;
export type { BookClosedFillDuotoneProps };
