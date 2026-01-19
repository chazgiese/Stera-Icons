import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.27-.96-5.52-.46-6.92.2a6 6 0 0 0-1.98 1.48l-.01.01a1 1 0 0 1-1.62 0v-.01l-.08-.1-.36-.35c-.33-.3-.84-.69-1.55-1.03-1.4-.66-3.65-1.16-6.92-.2A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31.86.4 1.5.88 1.95 1.27.45-.4 1.1-.87 1.95-1.27M9.2 5.73c-1.3-.6-3.32-1.08-6.2-.39v11.32c3.09-.64 5.42-.14 7.05.64q.53.25.95.52V7l-.25-.24c-.33-.3-.84-.69-1.55-1.02M21 5.35c-2.88-.69-4.9-.22-6.2.4A6 6 0 0 0 13 7v10.82q.42-.27.95-.52a11 11 0 0 1 7.05-.64zm-8.2 1.89" clipRule="evenodd" opacity={0.4} />
        <path d="M11.2 20.59" opacity={0.4} />
        <path fill="currentColor" d="M5.43 11.71a10 10 0 0 1 3.34.33 1 1 0 0 1-.54 1.92 8 8 0 0 0-2.66-.26 1 1 0 0 1-.14-1.99M15.23 12.04a10 10 0 0 1 3.34-.33 1 1 0 0 1-.14 2 8 8 0 0 0-2.66.25 1 1 0 0 1-.54-1.92M5.43 8.02a10 10 0 0 1 3.34.33 1 1 0 0 1-.54 1.93 8 8 0 0 0-2.66-.26 1 1 0 0 1-.14-2M15.23 8.35a10 10 0 0 1 3.34-.33 1 1 0 0 1-.14 2 8 8 0 0 0-2.66.26 1 1 0 0 1-.54-1.93" />
    </IconBase>
  ))
);

BookOpenTextBoldDuotone.displayName = 'BookOpenTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenTextBoldDuotone, BookOpenTextBoldDuotone as BookOpenTextBoldDuotoneIcon, BookOpenTextBoldDuotone as SiBookOpenTextBoldDuotone };
export default BookOpenTextBoldDuotone;
export type { BookOpenTextBoldDuotoneProps };
