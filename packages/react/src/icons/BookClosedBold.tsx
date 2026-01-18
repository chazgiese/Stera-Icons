import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookClosedBoldProps = Omit<IconBaseProps, 'children'>;

const BookClosedBold = memo(
  forwardRef<SVGSVGElement, BookClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 10a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 6a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.6 1q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T21 4.4V17a1 1 0 0 1-1 1c-.36 0-1 .45-1 1.5s.64 1.5 1 1.5a1 1 0 1 1 0 2H6.5a3.5 3.5 0 0 1-3.48-3.83L3 19V7.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q8.16 1 9.6 1zM6.5 18a1.5 1.5 0 0 0 0 3h10.8a4 4 0 0 1 0-3zM9.6 3c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C5 5.92 5 6.6 5 7.6v8.74Q5.68 16 6.5 16H19V4.4a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C18.3 3 18.04 3 17.6 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedBold.displayName = 'BookClosedBold';

// Triple export pattern (lucide-react style)
export { BookClosedBold, BookClosedBold as BookClosedBoldIcon, BookClosedBold as SiBookClosedBold };
export type { BookClosedBoldProps };
