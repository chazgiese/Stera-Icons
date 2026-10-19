import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" opacity={.4} />
        <path d="M14.92 7.5c1 0 1.83.82 1.83 1.83 0 .56-.45 1-1 1-.5 0-.9-.36-.99-.83h-1.09c-.37 0-.67.3-.67.67v4.16c0 .37.3.67.67.67q.26 0 .47.12.22.12.36.32.16.24.17.56 0 .25-.12.48-.17.3-.5.44-.18.08-.38.08h-3.34q-.26 0-.47-.12-.3-.16-.45-.49-.08-.18-.08-.39 0-.25.12-.48.17-.3.5-.44.17-.08.38-.08c.37 0 .67-.3.67-.67v-4.16c0-.37-.3-.67-.67-.67h-1.1c-.07.47-.48.83-.98.83-.55 0-1-.44-1-1 0-1 .82-1.83 1.83-1.83z" />
    </IconBase>
  ))
);

TextSquareBoldDuotone.displayName = 'TextSquareBoldDuotone';

// Triple export pattern
export { TextSquareBoldDuotone, TextSquareBoldDuotone as TextSquareBoldDuotoneIcon, TextSquareBoldDuotone as SiTextSquareBoldDuotone };
export default TextSquareBoldDuotone;
export type { TextSquareBoldDuotoneProps };
