import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.75 18.3q-.4.28-.67.53l-.08.07-.08-.07a8 8 0 0 0-.67-.54V6.91l.04.05.09.1.01.02a.75.75 0 0 0 1.21 0l.02-.03.09-.1.04-.04z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.05 4.16c1.8-.86 4.49-1.38 8.16-.3.32.1.54.38.54.72v13.36a.75.75 0 0 1-.96.72c-3.33-.97-5.64-.47-7.1.22a7 7 0 0 0-2.07 1.54l-.01.02a.75.75 0 0 1-1.16.07l-.05-.07-.02-.02-.09-.1q-.11-.14-.37-.37a7 7 0 0 0-1.62-1.07c-1.45-.7-3.76-1.2-7.09-.22a.75.75 0 0 1-.96-.72V4.58c0-.34.22-.63.54-.72 3.67-1.08 6.36-.56 8.16.3.89.42 1.54.91 1.97 1.3l.08.08.08-.07c.43-.4 1.08-.9 1.97-1.31m7.2.99c-3.04-.78-5.18-.3-6.55.36a7 7 0 0 0-2.08 1.54l-.01.03a.75.75 0 0 1-1.22 0l-.01-.03-.09-.1q-.11-.13-.37-.37A7 7 0 0 0 9.3 5.5c-1.37-.65-3.51-1.14-6.55-.36v11.82c3.19-.73 5.56-.22 7.2.55.88.43 1.54.92 1.97 1.31l.08.07.08-.07c.43-.4 1.09-.89 1.97-1.3 1.64-.78 4.01-1.29 7.2-.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenRegularDuotone.displayName = 'BookOpenRegularDuotone';

export { BookOpenRegularDuotone };
export type { BookOpenRegularDuotoneProps };
