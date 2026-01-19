import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookmarkBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookmarkBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookmarkBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 3H8a3 3 0 0 0-3 3v14.25c0 .42.5.65.83.38l4.22-3.61A3 3 0 0 1 12 16.3v2a1 1 0 0 0-.65.24l-4.23 3.6A2.5 2.5 0 0 1 3 20.25V6a5 5 0 0 1 5-5h4z" />
        <path fill="currentColor" d="M16 1a5 5 0 0 1 5 5v14.25a2.5 2.5 0 0 1-4.12 1.9l-4.23-3.61a1 1 0 0 0-.65-.24v-2a3 3 0 0 1 1.95.72l4.22 3.6a.5.5 0 0 0 .83-.37V6a3 3 0 0 0-3-3h-4V1z" opacity={.4} />
    </IconBase>
  ))
);

BookmarkBoldDuotone.displayName = 'BookmarkBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookmarkBoldDuotone, BookmarkBoldDuotone as BookmarkBoldDuotoneIcon, BookmarkBoldDuotone as SiBookmarkBoldDuotone };
export type { BookmarkBoldDuotoneProps };
