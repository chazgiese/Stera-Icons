import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-fill-duotone" {...props}>
      <path d="M11.29 20.7h-.01l-.03-.04zM2.73 5.54c3.37-.96 5.87-.5 7.55.28q.47.22.85.45A6 6 0 0 0 11 7.71V20a1 1 0 0 0 .22.63l-.02-.03-.07-.08-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 18.2V6.5a1 1 0 0 1 .73-.96M18 5q1.47.05 3.27.54a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.75 1.25q.19-.25.2-.58v-.59l.01-.26c.04-.5.15-1.15.39-1.78s.6-1.2 1.14-1.62c.53-.4 1.3-.72 2.45-.72a1 1 0 0 0 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v11.03a1 1 0 0 1-1 1c-1.16 0-1.92.31-2.45.72-.54.42-.9 1-1.14 1.62a7 7 0 0 0-.4 2.04V20a1 1 0 0 1-.8.98h-.01l-.13.02H12a1 1 0 0 1-1-1V7.71a5 5 0 0 1 .03-.83c.06-.52.2-1.23.55-1.96s.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2" />
    </IconBase>
  ))
);

BookOpenFoldFillDuotone.displayName = 'BookOpenFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFillDuotone, BookOpenFoldFillDuotone as BookOpenFoldFillDuotoneIcon, BookOpenFoldFillDuotone as SiBookOpenFoldFillDuotone };
export default BookOpenFoldFillDuotone;
export type { BookOpenFoldFillDuotoneProps };
