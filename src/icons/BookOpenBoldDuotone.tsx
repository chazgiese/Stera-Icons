import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 17.82q-.6.39-1 .75-.4-.37-1-.75V7l.18.21.01.01a1 1 0 0 0 1.62 0L13 7zm-.2-10.6" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.8 7.22" />
        <path fill="currentColor" fillRule="evenodd" d="M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.27-.96-5.52-.46-6.92.2a6 6 0 0 0-1.98 1.48l-.01.01a1 1 0 0 1-1.62 0v-.01l-.08-.1-.36-.35c-.33-.3-.84-.69-1.55-1.03-1.4-.66-3.65-1.16-6.92-.2A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31.86.4 1.5.88 1.95 1.27.45-.4 1.1-.87 1.95-1.27M21 5.34c-2.88-.69-4.9-.22-6.2.4a6 6 0 0 0-1.98 1.47l-.01.01a1 1 0 0 1-1.62 0l-.08-.1-.36-.36c-.33-.3-.84-.69-1.55-1.02-1.3-.62-3.32-1.09-6.2-.4v11.32c3.09-.64 5.42-.14 7.05.64.86.4 1.5.87 1.95 1.27.45-.4 1.1-.87 1.95-1.27a11 11 0 0 1 7.05-.64z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.2 20.59" />
    </IconBase>
  ))
);

BookOpenBoldDuotone.displayName = 'BookOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenBoldDuotone, BookOpenBoldDuotone as BookOpenBoldDuotoneIcon, BookOpenBoldDuotone as SiBookOpenBoldDuotone };
export type { BookOpenBoldDuotoneProps };
