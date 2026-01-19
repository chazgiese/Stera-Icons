import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fill-duotone" {...props}>
      <path d="m11.22 21.62-.02-.02zM1.72 3.62c3.73-1.1 6.48-.57 8.33.31q.53.25.95.52V21a1 1 0 0 0 .15.52l-.01-.01q0 0-.02-.03l-.08-.12-.37-.47c-.34-.39-.86-.9-1.58-1.34-1.4-.88-3.6-1.59-6.8-.65A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.21-.94-5.42-.23-6.81.65a7 7 0 0 0-2.03 1.93l-.02.03A1 1 0 0 0 13 21V4.45q.42-.27.95-.52" opacity={0.4} />
        <path fill="currentColor" d="M13 21a1 1 0 1 1-2 0V4.45q.6.4 1 .75.4-.36 1-.75z" />
    </IconBase>
  ))
);

BookOpenFillDuotone.displayName = 'BookOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFillDuotone, BookOpenFillDuotone as BookOpenFillDuotoneIcon, BookOpenFillDuotone as SiBookOpenFillDuotone };
export default BookOpenFillDuotone;
export type { BookOpenFillDuotoneProps };
