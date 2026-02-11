import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFill = memo(
  forwardRef<SVGSVGElement, BookOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fill" {...props}>
      <path fillRule="evenodd" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.77 1.28 1 1 0 0 1-1.59 0v-.02l-.07-.07-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 17.2V5.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28.74.34 1.31.74 1.72 1.08.4-.34.98-.74 1.72-1.08M9.44 6.64C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17a6 6 0 0 0-1.38-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFill.displayName = 'BookOpenFill';

// Triple export pattern (lucide-react style)
export { BookOpenFill, BookOpenFill as BookOpenFillIcon, BookOpenFill as SiBookOpenFill };
export default BookOpenFill;
export type { BookOpenFillProps };
