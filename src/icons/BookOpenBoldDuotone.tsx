import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.73 4.54c3.37-.96 5.87-.5 7.55.28a8 8 0 0 1 2.46 1.8v.02a1 1 0 0 1 .26.66V19a1 1 0 0 1-1.8.6l-.07-.08-.31-.3a6 6 0 0 0-1.38-.89c-1.24-.57-3.24-1-6.17-.17A1 1 0 0 1 2 17.2V5.5a1 1 0 0 1 .73-.96m6.71 2.1C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17a6 6 0 0 0-1.38-.88" clipRule="evenodd" />
        <path fill="currentColor" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28a1 1 0 0 1 .73.96v11.7a1 1 0 0 1-1.27.96c-2.93-.83-4.93-.4-6.17.17a6 6 0 0 0-1.77 1.28l-.03.03A1 1 0 0 0 13 19v-2.1q.33-.2.72-.38a10 10 0 0 1 6.28-.59V6.28c-2.53-.57-4.3-.17-5.44.36A6 6 0 0 0 13 7.69V7.3l-.02-.17a1 1 0 0 0-.23-.5h-.01a4 4 0 0 0-.6-.61L12 5.9c.4-.34.98-.74 1.72-1.08" opacity={.4} />
    </IconBase>
  ))
);

BookOpenBoldDuotone.displayName = 'BookOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenBoldDuotone, BookOpenBoldDuotone as BookOpenBoldDuotoneIcon, BookOpenBoldDuotone as SiBookOpenBoldDuotone };
export default BookOpenBoldDuotone;
export type { BookOpenBoldDuotoneProps };
