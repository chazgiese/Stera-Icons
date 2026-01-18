import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BookmarkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookmarkRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookmarkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.75H8A3.25 3.25 0 0 0 4.75 6v14.25c0 .64.75.98 1.24.57l4.22-3.61a2.8 2.8 0 0 1 1.79-.66v1.5q-.45 0-.81.3l-4.23 3.6a2.25 2.25 0 0 1-3.71-1.7V6A4.75 4.75 0 0 1 8 1.25h4z" />
        <path fill="currentColor" d="M16 1.25A4.75 4.75 0 0 1 20.75 6v14.25a2.25 2.25 0 0 1-3.71 1.7l-4.23-3.6q-.36-.3-.81-.3v-1.5c.64 0 1.27.22 1.79.66L18 20.8a.75.75 0 0 0 1.24-.56V6c0-1.8-1.46-3.25-3.25-3.25h-4v-1.5z" opacity={.4} />
    </IconBase>
  ))
);

BookmarkRegularDuotone.displayName = 'BookmarkRegularDuotone';

export { BookmarkRegularDuotone };
export type { BookmarkRegularDuotoneProps };
