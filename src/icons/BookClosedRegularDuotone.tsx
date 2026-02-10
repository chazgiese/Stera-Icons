import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookClosedRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookClosedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-duotone" {...props}>
      <path d="M13 10.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM15 6.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v11.5c0 .41-.34.75-.75.75h-.08c-.43.07-.97.57-.97 1.5 0 1 .62 1.5 1.05 1.5a.75.75 0 0 1 0 1.5H7.25a3 3 0 0 1-3-3V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-9.75 15a1.5 1.5 0 0 0 0 3h9.55a3.5 3.5 0 0 1 0-3zM9.8 3.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.35q.67-.39 1.5-.4h11V5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L17 3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedRegularDuotone.displayName = 'BookClosedRegularDuotone';

// Triple export pattern (lucide-react style)
export { BookClosedRegularDuotone, BookClosedRegularDuotone as BookClosedRegularDuotoneIcon, BookClosedRegularDuotone as SiBookClosedRegularDuotone };
export default BookClosedRegularDuotone;
export type { BookClosedRegularDuotoneProps };
