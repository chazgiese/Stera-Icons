import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookOpenTextFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextFill = memo(
  forwardRef<SVGSVGElement, BookOpenTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.95 3.93c1.85-.88 4.6-1.41 8.33-.31a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.21-.94-5.42-.23-6.81.65a7 7 0 0 0-2.03 1.93l-.02.03a1 1 0 0 1-1.72 0q0 0-.02-.03l-.08-.12-.37-.47c-.34-.39-.86-.9-1.58-1.34-1.4-.88-3.6-1.59-6.8-.65A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96c3.73-1.1 6.48-.57 8.33.31q.6.3 1.07.6V16a.88.88 0 0 0 1.76 0V4.53q.45-.3 1.07-.6m-6.23 8.28a10 10 0 0 0-3.28-.33.82.82 0 1 0 .12 1.65 8 8 0 0 1 2.72.26.83.83 0 0 0 .44-1.58m11.84-.33a10 10 0 0 0-3.28.33.83.83 0 0 0 .44 1.58 8 8 0 0 1 2.72-.26.83.83 0 0 0 .12-1.65M7.72 8.52a10 10 0 0 0-3.28-.32.83.83 0 0 0 .12 1.65 8 8 0 0 1 2.72.26.83.83 0 1 0 .44-1.59m11.84-.32a10 10 0 0 0-3.28.32.83.83 0 1 0 .44 1.59 8 8 0 0 1 2.72-.26.83.83 0 0 0 .12-1.65" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextFill.displayName = 'BookOpenTextFill';

// Triple export pattern (lucide-react style)
export { BookOpenTextFill, BookOpenTextFill as BookOpenTextFillIcon, BookOpenTextFill as SiBookOpenTextFill };
export default BookOpenTextFill;
export type { BookOpenTextFillProps };
