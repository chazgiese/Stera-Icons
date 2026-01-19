import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-duotone" {...props}>
      <path d="M11.39 20.44v-.01l-.1-.1q-.11-.15-.37-.38a7 7 0 0 0-1.62-1.07c-1.45-.7-3.76-1.2-7.09-.22a.75.75 0 0 1-.96-.72V4.58c0-.34.22-.63.54-.72 3.67-1.08 6.36-.56 8.16.3q.88.42 1.45.88a6 6 0 0 0-.15 1.58v.29l-.33-.33A7 7 0 0 0 9.3 5.5c-1.37-.65-3.51-1.14-6.55-.36v11.82c3.19-.73 5.56-.22 7.2.55q.75.38 1.3.77v1.77q.02.21.14.38M18.75 4.76v-1.5c1.04.05 2.2.22 3.46.6.32.1.54.38.54.72v13.36a.75.75 0 0 1-.96.72c-3.33-.97-5.64-.47-7.1.22a7 7 0 0 0-2.07 1.54 1 1 0 0 0 .13-.42v-.63a8 8 0 0 1 .15-1.18q.5-.35 1.15-.67c1.64-.77 4.01-1.28 7.2-.55V5.15q-1.37-.34-2.5-.39" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18 .75a.75.75 0 0 1 .75.75v12c0 .41-.34.75-.75.75a5.5 5.5 0 0 0-3.25.88c-.73.51-1.2 1.2-1.5 1.91a7 7 0 0 0-.5 2.33V20a.75.75 0 0 1-1.5.06L12 20l-.75.06V6.62a4 4 0 0 1 .03-.87 6 6 0 0 1 .62-2.04c.4-.75 1.05-1.5 2.06-2.06 1-.56 2.32-.9 4.04-.9m-.75 1.53a6 6 0 0 0-2.57.68 3.6 3.6 0 0 0-1.46 1.46 4 4 0 0 0-.48 2.11v8.44q.48-.58 1.15-1.07a6.6 6.6 0 0 1 3.36-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldRegularDuotone.displayName = 'BookOpenFoldRegularDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldRegularDuotone, BookOpenFoldRegularDuotone as BookOpenFoldRegularDuotoneIcon, BookOpenFoldRegularDuotone as SiBookOpenFoldRegularDuotone };
export type { BookOpenFoldRegularDuotoneProps };
