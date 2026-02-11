import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M2.73 5.54c3.37-.96 5.87-.5 7.55.28q.47.22.85.45A6 6 0 0 0 11 7.71V20q.01.46.32.73l-.04-.04-.08-.09-.07-.08-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 18.2V6.5a1 1 0 0 1 .73-.96m6.71 2.1C8.31 7.1 6.54 6.7 4 7.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.18.72.37V8.7l-.18-.17a6 6 0 0 0-1.38-.88" clipRule="evenodd" opacity={0.4} />
        <path d="M18 5q1.47.05 3.27.54a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.75 1.25q.19-.25.2-.58v-.59a8 8 0 0 1 .28-1.68l.43-.21a10 10 0 0 1 6.28-.59V7.28q-1.1-.24-2-.27z" opacity={0.4} />
        <path fillRule="evenodd" d="M17 2a1 1 0 0 1 1 1v11.03a1 1 0 0 1-1 1c-1.16 0-1.92.31-2.45.72-.54.42-.9 1-1.14 1.62a7 7 0 0 0-.4 2.04V20a1 1 0 0 1-.8.98h-.01l-.13.02h-.14a1 1 0 0 1-.93-1V7.71a5 5 0 0 1 .03-.83c.06-.52.2-1.23.55-1.96s.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2m-1 2.07c-.67.1-1.17.3-1.54.52-.53.33-.87.76-1.08 1.2A4 4 0 0 0 13 7.61v6.83q.15-.14.33-.27 1.05-.84 2.67-1.08z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldBoldDuotone.displayName = 'BookOpenFoldBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldBoldDuotone, BookOpenFoldBoldDuotone as BookOpenFoldBoldDuotoneIcon, BookOpenFoldBoldDuotone as SiBookOpenFoldBoldDuotone };
export default BookOpenFoldBoldDuotone;
export type { BookOpenFoldBoldDuotoneProps };
