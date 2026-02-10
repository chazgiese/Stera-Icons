import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookClosedBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookClosedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-bold-duotone" {...props}>
      <path d="M13 10a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 6.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17 2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v11.5a1 1 0 0 1-1 1l-.1.02c-.28.07-.7.43-.7 1.23 0 .91.55 1.25.8 1.25a1 1 0 1 1 0 2H7.25A3.25 3.25 0 0 1 4 18.75V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM7.25 17.5a1.25 1.25 0 1 0 0 2.5h9.17a3.7 3.7 0 0 1 0-2.5zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 7.8v7.95q.57-.25 1.25-.25H18V5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L17 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedBoldDuotone.displayName = 'BookClosedBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookClosedBoldDuotone, BookClosedBoldDuotone as BookClosedBoldDuotoneIcon, BookClosedBoldDuotone as SiBookClosedBoldDuotone };
export default BookClosedBoldDuotone;
export type { BookClosedBoldDuotoneProps };
