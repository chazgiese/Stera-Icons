import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquarePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.87 20H11l-1.97-.01L4 14.97 4 13v-.87zM17.8 19.57c-.37.19-.84.3-1.6.37l-.82.04L4.02 8.62l.04-.82c.07-.76.18-1.23.37-1.6zM19.98 15.38l-.04.82a4 4 0 0 1-.37 1.6L6.2 4.43c.37-.19.84-.3 1.6-.37l.82-.04zM13 4l1.97.01 5.02 5.02L20 11v.87L12.13 4z" opacity={0.4} />
        <path fill="currentColor" d="M20 11c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4h-2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2zm2 2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2h2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37z" />
    </IconBase>
  ))
);

SquarePlaceholderBoldDuotone.displayName = 'SquarePlaceholderBoldDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBoldDuotone, SquarePlaceholderBoldDuotone as SquarePlaceholderBoldDuotoneIcon, SquarePlaceholderBoldDuotone as SiSquarePlaceholderBoldDuotone };
export type { SquarePlaceholderBoldDuotoneProps };
