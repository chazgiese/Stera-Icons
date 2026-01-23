import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-fill-duotone" {...props}>
      <path d="M12.03 21H12zM12.15 20.99h-.02zM11.87 20.99h.04-.05M12.25 20.97l-.06.01h.03zM11.78 20.97h-.03zM12.54 20.83l.1-.07.02-.01A1 1 0 0 0 13 20v-.64a7 7 0 0 1 .48-2.22c.3-.68.74-1.33 1.42-1.8a5.2 5.2 0 0 1 3.1-.84 1 1 0 0 0 1-1V3.02q1.5.08 3.28.6a1 1 0 0 1 .72.96v13.36a1 1 0 0 1-1.28.96c-3.27-.96-5.52-.46-6.92.2a6 6 0 0 0-1.98 1.48l-.01.01a1 1 0 0 1-.27.24M1.72 3.62c3.73-1.1 6.48-.57 8.33.31q.7.34 1.2.7a6 6 0 0 0-.25 2v13.44a1 1 0 0 0 .16.48l.02.02.01.02v-.01l-.08-.1-.36-.35c-.33-.3-.84-.69-1.55-1.03-1.4-.66-3.65-1.16-6.92-.2A1 1 0 0 1 1 17.94V4.58a1 1 0 0 1 .72-.96M11.2 20.6v-.01" opacity={0.4} />
        <path fill="currentColor" d="M18 .5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1c-1.45 0-2.43.36-3.1.83a4 4 0 0 0-1.42 1.81 7 7 0 0 0-.48 2.22V20a1 1 0 0 1-.34.75l-.01.01-.22.14-.02.01a1 1 0 0 1-.35.09h-.1l-.15-.02h-.03l-.25-.1h-.01l-.07-.04-.02-.02a1 1 0 0 1-.25-.25l-.02-.02a1 1 0 0 1-.16-.47V6.62a5 5 0 0 1 .03-.91c.06-.57.23-1.34.65-2.13s1.1-1.58 2.15-2.16A8.5 8.5 0 0 1 18 .5" />
    </IconBase>
  ))
);

BookOpenFoldFillDuotone.displayName = 'BookOpenFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFillDuotone, BookOpenFoldFillDuotone as BookOpenFoldFillDuotoneIcon, BookOpenFoldFillDuotone as SiBookOpenFoldFillDuotone };
export default BookOpenFoldFillDuotone;
export type { BookOpenFoldFillDuotoneProps };
