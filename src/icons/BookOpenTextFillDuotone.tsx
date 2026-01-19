import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.21-.94-5.42-.23-6.81.65a7 7 0 0 0-2.03 1.93l-.02.03A1 1 0 0 0 13 21V8a1 1 0 1 0-2 0v13q0 .3.15.52l-.01-.01q0 0-.02-.03l-.08-.12-.37-.47c-.34-.39-.86-.9-1.58-1.34-1.4-.88-3.6-1.59-6.8-.65A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31.86.4 1.5.88 1.95 1.27.45-.4 1.1-.87 1.95-1.27m-6.18 8.1a10 10 0 0 0-3.34-.32 1 1 0 0 0 .14 2 8 8 0 0 1 2.66.25 1 1 0 1 0 .54-1.92m11.8-.32a10 10 0 0 0-3.34.33 1 1 0 0 0 .54 1.92 8 8 0 0 1 2.66-.25 1 1 0 0 0 .14-2M7.77 8.35a10 10 0 0 0-3.34-.33 1 1 0 0 0 .14 2 8 8 0 0 1 2.66.26 1 1 0 0 0 .54-1.93m11.8-.33a10 10 0 0 0-3.34.33 1 1 0 0 0 .54 1.93 8 8 0 0 1 2.66-.26 1 1 0 0 0 .14-2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M4.43 11.71a10 10 0 0 1 3.34.33 1 1 0 1 1-.54 1.92 8 8 0 0 0-2.66-.25 1 1 0 0 1-.14-2M16.23 12.04a10 10 0 0 1 3.34-.33 1 1 0 1 1-.14 2 8 8 0 0 0-2.66.25 1 1 0 0 1-.54-1.92M4.43 8.02a10 10 0 0 1 3.34.33 1 1 0 0 1-.54 1.93 8 8 0 0 0-2.66-.26 1 1 0 0 1-.14-2M16.23 8.35a10 10 0 0 1 3.34-.33 1 1 0 0 1-.14 2 8 8 0 0 0-2.66.26 1 1 0 0 1-.54-1.93" />
    </IconBase>
  ))
);

BookOpenTextFillDuotone.displayName = 'BookOpenTextFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenTextFillDuotone, BookOpenTextFillDuotone as BookOpenTextFillDuotoneIcon, BookOpenTextFillDuotone as SiBookOpenTextFillDuotone };
export type { BookOpenTextFillDuotoneProps };
