import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldBoldProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldBold = memo(
  forwardRef<SVGSVGElement, BookOpenFoldBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-bold" {...props}>
      <path fillRule="evenodd" d="M17 2a1 1 0 0 1 1 1v2q1.48.05 3.27.54a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.75 1.26 1 1 0 0 1-1.6.02v-.01l-.07-.08-.31-.3c-.3-.26-.75-.6-1.38-.89-1.25-.57-3.25-1-6.18-.17A1 1 0 0 1 2 18.2V6.5a1 1 0 0 1 .73-.96c3.37-.96 5.87-.5 7.55.28q.47.22.84.45c.09-.4.23-.88.46-1.35.35-.73.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2M9.44 7.64C8.31 7.1 6.54 6.7 4 7.28v9.65c2.74-.53 4.82-.09 6.29.59q.39.18.72.38L11 8.69l-.18-.17a6 6 0 0 0-1.38-.88M18 14.03a1 1 0 0 1-1 1c-1.8 0-2.72.76-3.24 1.62q-.31.53-.47 1.09.2-.12.43-.22a10 10 0 0 1 6.28-.59V7.28q-1.1-.24-2-.27zm-2-9.96c-.67.1-1.17.3-1.54.52-.53.33-.87.76-1.09 1.2A4 4 0 0 0 13 7.61v6.83a5.4 5.4 0 0 1 3-1.35z" clipRule="evenodd" />
        <path d="M12.8 20.6" />
    </IconBase>
  ))
);

BookOpenFoldBold.displayName = 'BookOpenFoldBold';

// Triple export pattern (lucide-react style)
export { BookOpenFoldBold, BookOpenFoldBold as BookOpenFoldBoldIcon, BookOpenFoldBold as SiBookOpenFoldBold };
export default BookOpenFoldBold;
export type { BookOpenFoldBoldProps };
