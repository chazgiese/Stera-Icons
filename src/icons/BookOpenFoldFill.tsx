import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFill = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-fill" {...props}>
      <path fillRule="evenodd" d="M17 2a1 1 0 0 1 1 1v2q1.47.04 3.27.54a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.72 1.23 1 1 0 0 1-.72.43h-.1L12 21h-.08a1 1 0 0 1-.72-.4l-.07-.08-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 18.2V6.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28q.47.22.84.45c.09-.4.23-.88.46-1.35.35-.73.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2M9.44 7.64C8.31 7.1 6.54 6.7 4 7.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.18.72.37V8.7l-.18-.17a6 6 0 0 0-1.38-.88M18 14.03a1 1 0 0 1-1 1c-1.16 0-1.92.31-2.45.72a3.7 3.7 0 0 0-1.26 1.98l.43-.21a10 10 0 0 1 6.28-.59V7.28q-1.1-.24-2-.27z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldFill.displayName = 'BookOpenFoldFill';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFill, BookOpenFoldFill as BookOpenFoldFillIcon, BookOpenFoldFill as SiBookOpenFoldFill };
export default BookOpenFoldFill;
export type { BookOpenFoldFillProps };
