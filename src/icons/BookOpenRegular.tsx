import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenRegularProps = Omit<IconBaseProps, 'children'>;

const BookOpenRegular = memo(
  forwardRef<SVGSVGElement, BookOpenRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open" {...props}>
      <path fillRule="evenodd" d="M13.82 5.05c1.63-.75 4.07-1.22 7.39-.27.32.1.54.39.54.72v11.7a.75.75 0 0 1-.96.72c-2.98-.85-5.04-.41-6.34.19a6 6 0 0 0-1.77 1.24l-.07.09-.01.01a.75.75 0 0 1-1.2 0l-.01-.01-.07-.09-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19a.75.75 0 0 1-.96-.72V5.5c0-.33.22-.63.54-.72 3.32-.95 5.76-.48 7.39.27.8.37 1.4.8 1.8 1.16l.02.02.03-.02c.4-.35.99-.79 1.8-1.16M9.55 6.4c-1.22-.56-3.11-.98-5.8-.33v10.16a10 10 0 0 1 6.43.5q.61.3 1.07.6V7.6l-.27-.26c-.3-.27-.78-.62-1.43-.92m10.7-.33c-2.69-.65-4.58-.23-5.8.33a6 6 0 0 0-1.7 1.18v9.76q.45-.32 1.07-.6a10 10 0 0 1 6.43-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenRegular.displayName = 'BookOpenRegular';

// Triple export pattern (lucide-react style)
export { BookOpenRegular, BookOpenRegular as BookOpenRegularIcon, BookOpenRegular as SiBookOpenRegular };
export default BookOpenRegular;
export type { BookOpenRegularProps };
