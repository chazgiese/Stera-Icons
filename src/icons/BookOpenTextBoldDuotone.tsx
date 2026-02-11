import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.77 1.28 1 1 0 0 1-1.59 0v-.02l-.07-.07-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 17.2V5.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28.74.34 1.31.74 1.72 1.08.4-.34.98-.74 1.72-1.08M9.44 6.64C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17a6 6 0 0 0-1.38-.88M20 6.28c-2.53-.57-4.3-.17-5.44.36A6 6 0 0 0 13 7.69v9.2q.33-.18.72-.37a10 10 0 0 1 6.28-.59z" clipRule="evenodd" opacity={.4} />
        <path d="M6.18 11.59a7 7 0 0 1 2.85.33.87.87 0 1 1-.56 1.66c-.6-.2-1.31-.32-2.15-.25a.88.88 0 0 1-.14-1.74M14.97 11.92a7 7 0 0 1 2.85-.33.88.88 0 0 1-.14 1.74 5 5 0 0 0-2.15.25.87.87 0 1 1-.56-1.66M6.18 8.4a7 7 0 0 1 2.85.34.88.88 0 0 1-.56 1.65c-.6-.2-1.31-.31-2.15-.25a.88.88 0 0 1-.14-1.74M14.97 8.74a7 7 0 0 1 2.85-.34.87.87 0 0 1-.14 1.74 5 5 0 0 0-2.15.25.87.87 0 0 1-.56-1.65" />
    </IconBase>
  ))
);

BookOpenTextBoldDuotone.displayName = 'BookOpenTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenTextBoldDuotone, BookOpenTextBoldDuotone as BookOpenTextBoldDuotoneIcon, BookOpenTextBoldDuotone as SiBookOpenTextBoldDuotone };
export default BookOpenTextBoldDuotone;
export type { BookOpenTextBoldDuotoneProps };
