import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextFill = memo(
  forwardRef<SVGSVGElement, BookOpenTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-fill" {...props}>
      <path d="M6.18 11.58a7 7 0 0 1 2.85.34.87.87 0 0 1-.56 1.66c-.6-.2-1.31-.32-2.15-.25a.88.88 0 0 1-.14-1.75M6.18 8.4a7 7 0 0 1 2.85.34.88.88 0 0 1-.56 1.65c-.6-.2-1.31-.31-2.15-.25a.87.87 0 0 1-.14-1.74" />
        <path fillRule="evenodd" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.77 1.28 1 1 0 0 1-1.59 0v-.02l-.07-.07-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 17.2V5.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28.74.34 1.31.74 1.72 1.08.4-.34.98-.74 1.72-1.08M9.44 6.64C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17a6 6 0 0 0-1.38-.88m8.38 4.94a7 7 0 0 0-2.85.34.87.87 0 0 0 .56 1.66c.6-.2 1.31-.32 2.15-.25a.88.88 0 0 0 .14-1.75m0-3.18a7 7 0 0 0-2.85.34.88.88 0 0 0 .56 1.65c.6-.2 1.31-.31 2.15-.25a.88.88 0 0 0 .14-1.74" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextFill.displayName = 'BookOpenTextFill';

// Triple export pattern (lucide-react style)
export { BookOpenTextFill, BookOpenTextFill as BookOpenTextFillIcon, BookOpenTextFill as SiBookOpenTextFill };
export default BookOpenTextFill;
export type { BookOpenTextFillProps };
