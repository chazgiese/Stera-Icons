import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FinderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderBoldDuotone = memo(
  forwardRef<SVGSVGElement, FinderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 2q2.05-.02 3.36.07c.9.07 1.66.23 2.36.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.08.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-1.18.6-2.63.64-4.72.65h-.08a1 1 0 0 1-.78-.49 6 6 0 0 1-.44-.95v-.01l-.09-.22-.12-.33q-.28-.8-.54-2.04 1.02 0 2-.21c.23 1.06.5 1.8.68 2.24 1.76-.02 2.57-.11 3.19-.43a4 4 0 0 0 1.74-1.74c.2-.37.31-.85.37-1.62.07-.78.07-1.78.07-3.2v-2c0-1.42 0-2.42-.07-3.2a4 4 0 0 0-.37-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.65-.05-1.46-.06-2.53-.06l-.15.37c-.25.62-.59 1.49-.96 2.48a75 75 0 0 0-1.8 5.34q.4.05.78.02.39-.04.51-.1a1 1 0 0 1 1.45.89q0 1.56.14 2.77-.98.22-1.99.18-.09-.81-.13-1.74a7 7 0 0 1-1.88-.16L9.37 14l-.08-.02h-.03a1 1 0 0 1-.73-1.22 67 67 0 0 1 2.16-6.61 126 126 0 0 1 1.27-3.26l.09-.2.02-.06v-.01A1 1 0 0 1 13 2" opacity={0.4} />
        <path d="M16 6.5a1 1 0 0 1 1 1V9a1 1 0 0 1-2 0V7.5a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M13 2a1 1 0 0 0-.92.62l-.01.01-.02.06-.09.2-.3.74-.14.37H11c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1.5c.31.93.59 1.43.64 1.51a1 1 0 0 0 .79.49H11q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2z" />
        <path fill="currentColor" d="M16.41 14.52a1 1 0 0 1 1.18 1.62 9.5 9.5 0 0 1-11.18 0 1 1 0 0 1 1.18-1.62 7.5 7.5 0 0 0 8.82 0M7 6.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FinderBoldDuotone.displayName = 'FinderBoldDuotone';

// Triple export pattern (lucide-react style)
export { FinderBoldDuotone, FinderBoldDuotone as FinderBoldDuotoneIcon, FinderBoldDuotone as SiFinderBoldDuotone };
export type { FinderBoldDuotoneProps };
