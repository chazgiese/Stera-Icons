import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftSquareBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftSquareBold = memo(
  forwardRef<SVGSVGElement, ArrowLeftSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L10.42 11H16c.55 0 1 .45 1 1s-.45 1-1 1h-5.59l2.3 2.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4q-.28-.28-.29-.7t.3-.7z" />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowLeftSquareBold.displayName = 'ArrowLeftSquareBold';

// Triple export pattern
export { ArrowLeftSquareBold, ArrowLeftSquareBold as ArrowLeftSquareBoldIcon, ArrowLeftSquareBold as SiArrowLeftSquareBold };
export default ArrowLeftSquareBold;
export type { ArrowLeftSquareBoldProps };
