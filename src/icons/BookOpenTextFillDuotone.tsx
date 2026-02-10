import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-fill-duotone" {...props}>
      <path d="M4 6.28c2.53-.57 4.3-.17 5.44.36A6 6 0 0 1 11 7.69v9.2a8 8 0 0 0-.72-.37A10 10 0 0 0 4 15.93zm5.03 5.64a7 7 0 0 0-2.85-.34.88.88 0 0 0 .14 1.75q1.25-.09 2.15.25a.87.87 0 1 0 .56-1.66m0-3.18a7 7 0 0 0-2.85-.34.88.88 0 0 0 .14 1.74c.84-.06 1.55.05 2.15.25a.87.87 0 0 0 .56-1.65M14.56 6.64c1.13-.53 2.9-.93 5.44-.36v9.65c-2.74-.53-4.82-.09-6.28.59q-.39.19-.72.37V7.7l.18-.17c.3-.26.75-.6 1.38-.88m3.26 4.94a7 7 0 0 0-2.85.34.87.87 0 0 0 .56 1.66c.6-.2 1.31-.32 2.15-.25a.88.88 0 0 0 .14-1.75m0-3.18a7 7 0 0 0-2.85.34.88.88 0 0 0 .56 1.65c.6-.2 1.31-.31 2.15-.25a.87.87 0 0 0 .14-1.74" opacity={0.4} />
        <path fill="currentColor" d="M6.18 11.58a7 7 0 0 1 2.85.34.87.87 0 0 1-.56 1.66c-.6-.2-1.31-.32-2.15-.25a.88.88 0 0 1-.14-1.75M6.18 8.4a7 7 0 0 1 2.85.34.88.88 0 0 1-.56 1.65c-.6-.2-1.31-.31-2.15-.25a.87.87 0 0 1-.14-1.74M14.97 11.92a7 7 0 0 1 2.85-.34.88.88 0 0 1-.14 1.75 5 5 0 0 0-2.15.25.87.87 0 1 1-.56-1.66M14.97 8.74a7 7 0 0 1 2.85-.34.88.88 0 0 1-.14 1.74 5 5 0 0 0-2.15.25.87.87 0 0 1-.56-1.65" />
        <path fill="currentColor" fillRule="evenodd" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.77 1.28 1 1 0 0 1-1.59 0v-.02l-.07-.07-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 17.2V5.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28.74.34 1.31.74 1.72 1.08.4-.34.98-.74 1.72-1.08M9.44 6.64C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17a6 6 0 0 0-1.38-.88M20 6.28c-2.53-.57-4.3-.17-5.44.36A6 6 0 0 0 13 7.69v9.2q.33-.18.72-.37a10 10 0 0 1 6.28-.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextFillDuotone.displayName = 'BookOpenTextFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenTextFillDuotone, BookOpenTextFillDuotone as BookOpenTextFillDuotoneIcon, BookOpenTextFillDuotone as SiBookOpenTextFillDuotone };
export default BookOpenTextFillDuotone;
export type { BookOpenTextFillDuotoneProps };
