import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM9.08 7.5c-1 0-1.83.82-1.83 1.83a1 1 0 0 0 1.99.17h1.1c.32 0 .58.23.65.53l.01.14v4.16l-.01.14a.7.7 0 0 1-.66.53 1 1 0 0 0 0 2h3.34a1 1 0 0 0 0-2 .7.7 0 0 1-.66-.53l-.01-.14v-4.16c0-.37.3-.67.67-.67h1.09a1 1 0 0 0 1.99-.17c0-1-.82-1.83-1.83-1.83z" clipRule="evenodd" opacity={.4} />
        <path d="M14.92 7.5c1 0 1.83.82 1.83 1.83a1 1 0 0 1-1.99.17h-1.09c-.37 0-.67.3-.67.67v4.16l.01.14c.07.3.33.53.66.53a1 1 0 0 1 0 2h-3.34a1 1 0 0 1 0-2c.33 0 .6-.23.66-.53l.01-.14v-4.16l-.01-.14a.7.7 0 0 0-.66-.53h-1.1a1 1 0 0 1-1.98-.17c0-1 .82-1.83 1.83-1.83z" />
    </IconBase>
  ))
);

TextSquareFillDuotone.displayName = 'TextSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { TextSquareFillDuotone, TextSquareFillDuotone as TextSquareFillDuotoneIcon, TextSquareFillDuotone as SiTextSquareFillDuotone };
export default TextSquareFillDuotone;
export type { TextSquareFillDuotoneProps };
