import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBold = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-bold" {...props}>
      <path fill="currentColor" d="M20 11.87 12.13 4H11q-1.45 0-2.38.02l11.36 11.36Q20 14.45 20 13zm-15.99 3.1.05 1.23c.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38l1.23.05zM6.18 4.44a4 4 0 0 0-1.74 1.74l-.01.02L17.8 19.57h.02a4 4 0 0 0 1.74-1.75l.01-.02L6.2 4.43zm13.8 4.59q0-.7-.04-1.23a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38l-1.23-.05zM22 13c0 2.15 0 3.66-.3 4.81q-.14.48-.35.91a6 6 0 0 1-3.54 2.97c-1.15.32-2.66.31-4.81.31h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2c0-2.15 0-3.66.3-4.81q.14-.48.35-.91A6 6 0 0 1 6.2 2.3C7.34 1.99 8.85 2 11 2h2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37zm-18-.87L11.87 20H13q1.45 0 2.38-.02L4.02 8.62Q4 9.55 4 11z" />
    </IconBase>
  ))
);

SquarePlaceholderBold.displayName = 'SquarePlaceholderBold';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBold, SquarePlaceholderBold as SquarePlaceholderBoldIcon, SquarePlaceholderBold as SiSquarePlaceholderBold };
export default SquarePlaceholderBold;
export type { SquarePlaceholderBoldProps };
