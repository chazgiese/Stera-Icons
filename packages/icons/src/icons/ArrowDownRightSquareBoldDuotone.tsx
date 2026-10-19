import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17c.55 0 1 .45 1 1v5.66q0 .41-.3.7c-.18.2-.44.3-.7.3H9.17c-.55 0-1-.45-1-1s.45-1 1-1h3.24L8.46 9.88c-.39-.4-.39-1.02 0-1.42.4-.39 1.03-.39 1.42 0l3.95 3.95V9.17c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowDownRightSquareBoldDuotone.displayName = 'ArrowDownRightSquareBoldDuotone';

// Triple export pattern
export { ArrowDownRightSquareBoldDuotone, ArrowDownRightSquareBoldDuotone as ArrowDownRightSquareBoldDuotoneIcon, ArrowDownRightSquareBoldDuotone as SiArrowDownRightSquareBoldDuotone };
export default ArrowDownRightSquareBoldDuotone;
export type { ArrowDownRightSquareBoldDuotoneProps };
