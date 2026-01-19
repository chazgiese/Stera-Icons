import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookClosedRegularProps = Omit<IconBaseProps, 'children'>;

const BookClosedRegular = memo(
  forwardRef<SVGSVGElement, BookClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed" {...props}>
      <path fill="currentColor" d="M13 10.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 6.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.6 1.25q.6 0 1.05.02c.3.03.59.08.87.23q.65.33.98.98.2.43.23.87t.02 1.05V17c0 .41-.34.75-.75.75-.54 0-1.25.62-1.25 1.75s.7 1.75 1.25 1.75a.75.75 0 0 1 0 1.5H6.5a3.25 3.25 0 0 1-3.23-3.6L3.25 19V7.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05zM6.5 17.75a1.75 1.75 0 0 0 0 3.5h11.18a3.8 3.8 0 0 1 0-3.5zm3.1-15c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v9.16q.76-.5 1.75-.51h12.75V4.4c0-.43 0-.71-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.03-.92-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedRegular.displayName = 'BookClosedRegular';

// Triple export pattern (lucide-react style)
export { BookClosedRegular, BookClosedRegular as BookClosedRegularIcon, BookClosedRegular as SiBookClosedRegular };
export type { BookClosedRegularProps };
