import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFoldFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFill = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 .5a1 1 0 0 1 1 1v1.52q1.5.08 3.28.6a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.27-.96-5.52-.46-6.92.2a6 6 0 0 0-1.98 1.48l-.01.01h-.01l-.06.08-.01.01-.17.15-.03.01-.06.04-.03.02-.09.03-.22.06h-.11L12 21h-.03l-.1-.01a1 1 0 0 1-.32-.1h-.01a1 1 0 0 1-.35-.3v-.01l-.08-.1-.36-.35c-.33-.3-.84-.69-1.55-1.03-1.4-.66-3.65-1.16-6.92-.2A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31q.7.34 1.2.7.15-.51.43-1.04c.43-.79 1.1-1.58 2.16-2.16A8.5 8.5 0 0 1 18 .5M9.2 5.74c-1.3-.62-3.32-1.09-6.2-.4v11.32c3.09-.64 5.42-.14 7.05.64q.53.24.95.52V7l-.25-.24c-.33-.3-.84-.69-1.55-1.02M19 13.5a1 1 0 0 1-1 1c-1.45 0-2.43.36-3.1.83a4 4 0 0 0-1.6 2.3l.65-.33a11 11 0 0 1 7.05-.64V5.34a12 12 0 0 0-2-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldFill.displayName = 'BookOpenFoldFill';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFill, BookOpenFoldFill as BookOpenFoldFillIcon, BookOpenFoldFill as SiBookOpenFoldFill };
export default BookOpenFoldFill;
export type { BookOpenFoldFillProps };
