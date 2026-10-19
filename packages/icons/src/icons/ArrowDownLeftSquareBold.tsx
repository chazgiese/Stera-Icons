import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftSquareBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftSquareBold = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.12 8.46c.4-.39 1.02-.39 1.42 0 .39.4.39 1.03 0 1.42l-3.95 3.95h3.24c.55 0 1 .45 1 1s-.45 1-1 1H9.17q-.41 0-.7-.3c-.2-.18-.3-.44-.3-.7V9.17c0-.55.45-1 1-1s1 .45 1 1v3.24z" />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownLeftSquareBold.displayName = 'ArrowDownLeftSquareBold';

// Triple export pattern
export { ArrowDownLeftSquareBold, ArrowDownLeftSquareBold as ArrowDownLeftSquareBoldIcon, ArrowDownLeftSquareBold as SiArrowDownLeftSquareBold };
export default ArrowDownLeftSquareBold;
export type { ArrowDownLeftSquareBoldProps };
