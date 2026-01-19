import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFoldRegularProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldRegular = memo(
  forwardRef<SVGSVGElement, BookOpenFoldRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 .75a.75.75 0 0 1 .75.75v1.76c1.04.05 2.2.22 3.46.6.32.09.54.38.54.72v13.36a.75.75 0 0 1-.96.72c-3.33-.97-5.64-.47-7.1.22a7 7 0 0 0-2.07 1.54l-.02.02a.75.75 0 0 1-1.2 0l-.02-.02-.09-.1-.37-.37a7 7 0 0 0-1.62-1.07c-1.45-.7-3.76-1.2-7.09-.22a.75.75 0 0 1-.96-.72V4.58c0-.34.22-.63.54-.72 3.67-1.08 6.36-.56 8.16.3q.88.42 1.45.88.14-.63.5-1.33c.4-.75 1.05-1.5 2.06-2.06 1-.56 2.32-.9 4.04-.9M9.3 5.51c-1.37-.65-3.51-1.14-6.55-.36v11.82c3.19-.73 5.56-.22 7.2.55q.75.38 1.3.77V6.91l-.33-.33A7 7 0 0 0 9.3 5.5m9.45 7.99c0 .41-.34.75-.75.75-2.36 0-3.6.93-4.3 1.96a6 6 0 0 0-.8 1.97q.5-.34 1.15-.66c1.64-.77 4.01-1.28 7.2-.55V5.15q-1.38-.35-2.5-.39zm-1.5-11.22a6 6 0 0 0-2.57.68 3.6 3.6 0 0 0-1.46 1.46 4 4 0 0 0-.47 2.14v8.42a6 6 0 0 1 4.5-2.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldRegular.displayName = 'BookOpenFoldRegular';

// Triple export pattern (lucide-react style)
export { BookOpenFoldRegular, BookOpenFoldRegular as BookOpenFoldRegularIcon, BookOpenFoldRegular as SiBookOpenFoldRegular };
export type { BookOpenFoldRegularProps };
