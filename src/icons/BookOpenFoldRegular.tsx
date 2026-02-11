import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldRegularProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldRegular = memo(
  forwardRef<SVGSVGElement, BookOpenFoldRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold" {...props}>
      <path fillRule="evenodd" d="M17 2.25a.75.75 0 0 1 .75.75v2.25q1.54 0 3.46.53c.32.1.54.39.54.72v11.7a.75.75 0 0 1-.96.72c-2.98-.85-5.04-.41-6.33.19a6 6 0 0 0-1.84 1.33h-.01a.75.75 0 0 1-1.2.01l-.01-.01-.08-.09-.33-.32c-.3-.27-.78-.62-1.44-.92-1.3-.6-3.36-1.04-6.34-.19a.75.75 0 0 1-.96-.72V6.5c0-.33.22-.62.54-.72 3.32-.94 5.76-.48 7.39.27q.66.3 1.13.64c.06-.47.2-1.06.5-1.66.33-.7.87-1.4 1.74-1.93A6.5 6.5 0 0 1 17 2.25M9.55 7.41c-1.22-.56-3.11-.98-5.8-.33v10.16a10 10 0 0 1 6.43.5q.61.3 1.08.6l-.01-9.75-.27-.26c-.3-.27-.78-.62-1.43-.92m8.2 6.62c0 .41-.34.75-.75.75-1.9 0-2.89.8-3.45 1.74l-.17.3a6 6 0 0 0-.48 1.43q.4-.26.93-.5a10 10 0 0 1 6.42-.5V7.07q-1.4-.32-2.5-.33zm-1.5-10.24q-1.24.14-1.92.59c-.58.35-.95.82-1.18 1.3a4 4 0 0 0-.4 1.95v7.43a5 5 0 0 1 3.5-1.74z" clipRule="evenodd" />
        <path d="M12.6 20.45" />
    </IconBase>
  ))
);

BookOpenFoldRegular.displayName = 'BookOpenFoldRegular';

// Triple export pattern (lucide-react style)
export { BookOpenFoldRegular, BookOpenFoldRegular as BookOpenFoldRegularIcon, BookOpenFoldRegular as SiBookOpenFoldRegular };
export default BookOpenFoldRegular;
export type { BookOpenFoldRegularProps };
