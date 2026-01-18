import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenTextRegularProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextRegular = memo(
  forwardRef<SVGSVGElement, BookOpenTextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.45 11.96a10 10 0 0 1 3.25.32.75.75 0 0 1-.4 1.44 8 8 0 0 0-2.75-.26.75.75 0 0 1-.1-1.5M5.45 8.27a10 10 0 0 1 3.25.32.75.75 0 1 1-.4 1.45 8 8 0 0 0-2.75-.27.75.75 0 0 1-.1-1.5M15.3 12.28q1.4-.42 3.25-.32a.75.75 0 0 1-.1 1.5 8 8 0 0 0-2.75.26.75.75 0 0 1-.4-1.44M15.3 8.6q1.4-.42 3.25-.33a.75.75 0 0 1-.1 1.5 8 8 0 0 0-2.75.27.75.75 0 1 1-.4-1.45" />
        <path fill="currentColor" fillRule="evenodd" d="M14.05 4.16c1.8-.86 4.49-1.38 8.16-.3.32.1.54.38.54.72v13.36a.75.75 0 0 1-.96.72c-3.33-.97-5.64-.47-7.1.22a7 7 0 0 0-2.07 1.54l-.01.02a.75.75 0 0 1-1.16.07l-.05-.07-.02-.02-.09-.1q-.11-.14-.37-.37a7 7 0 0 0-1.62-1.07c-1.45-.7-3.76-1.2-7.09-.22a.75.75 0 0 1-.96-.72V4.58c0-.34.22-.63.54-.72 3.67-1.08 6.36-.56 8.16.3.89.42 1.54.91 1.97 1.3l.08.08.08-.07c.43-.4 1.08-.9 1.97-1.31M9.3 5.5c-1.37-.65-3.51-1.14-6.55-.36v11.82c3.19-.73 5.56-.22 7.2.55q.75.38 1.3.77V6.91l-.33-.33A7 7 0 0 0 9.3 5.5m11.95-.36c-3.04-.78-5.18-.3-6.55.36a7 7 0 0 0-1.95 1.4v11.38q.55-.4 1.3-.77c1.64-.77 4.01-1.28 7.2-.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextRegular.displayName = 'BookOpenTextRegular';

export { BookOpenTextRegular };
export type { BookOpenTextRegularProps };
