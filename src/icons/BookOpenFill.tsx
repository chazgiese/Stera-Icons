import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFill = memo(
  forwardRef<SVGSVGElement, BookOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fill" {...props}>
      <path fill="currentColor" d="M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.21-.94-5.42-.23-6.81.65a7 7 0 0 0-2.03 1.93l-.02.03a1 1 0 0 1-1.65.1l-.07-.1q0 0-.02-.03l-.08-.12-.37-.47c-.34-.39-.86-.9-1.58-1.34-1.4-.88-3.6-1.59-6.8-.65A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31q.53.25.95.52V16a1 1 0 1 0 2 0V4.45q.42-.27.95-.52" />
    </IconBase>
  ))
);

BookOpenFill.displayName = 'BookOpenFill';

// Triple export pattern (lucide-react style)
export { BookOpenFill, BookOpenFill as BookOpenFillIcon, BookOpenFill as SiBookOpenFill };
export default BookOpenFill;
export type { BookOpenFillProps };
