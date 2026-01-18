import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFoldBoldProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldBold = memo(
  forwardRef<SVGSVGElement, BookOpenFoldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 .5a1 1 0 0 1 1 1v1.52q1.5.08 3.28.6a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.27-.96-5.52-.46-6.92.2a6 6 0 0 0-1.98 1.48l-.01.01a1 1 0 0 1-1.62 0v-.01l-.08-.1-.36-.35c-.33-.3-.84-.69-1.55-1.03-1.4-.66-3.65-1.16-6.92-.2A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31q.7.34 1.2.7.15-.51.43-1.04c.43-.79 1.1-1.58 2.16-2.16A8.5 8.5 0 0 1 18 .5M9.2 5.74c-1.3-.62-3.32-1.09-6.2-.4v11.32c3.09-.64 5.42-.14 7.05.64q.53.24.95.52V7l-.25-.24c-.33-.3-.84-.69-1.55-1.02M19 13.5a1 1 0 0 1-1 1c-2.28 0-3.45.89-4.1 1.85a5 5 0 0 0-.6 1.28l.65-.33a11 11 0 0 1 7.05-.64V5.34q-1.08-.25-2-.31zM17 2.55c-.96.1-1.67.34-2.2.63-.68.38-1.1.87-1.36 1.36A4 4 0 0 0 13 6.52v7.81A6.4 6.4 0 0 1 17 12.54z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.2 20.59z" />
    </IconBase>
  ))
);

BookOpenFoldBold.displayName = 'BookOpenFoldBold';

// Triple export pattern (lucide-react style)
export { BookOpenFoldBold, BookOpenFoldBold as BookOpenFoldBoldIcon, BookOpenFoldBold as SiBookOpenFoldBold };
export type { BookOpenFoldBoldProps };
