import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareFill = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM8.9 7.25c-.91 0-1.65.74-1.65 1.64V10c0 .6-.4 1.12-.96 1.3a.75.75 0 0 0 0 1.43c.57.17.96.7.96 1.29v1.1c0 .9.74 1.64 1.64 1.64h.61a.75.75 0 0 0 0-1.5h-.6a.14.14 0 0 1-.15-.14V14c0-.77-.31-1.49-.83-2.01.52-.52.83-1.24.83-2V8.9q.01-.14.14-.15h.61a.75.75 0 0 0 0-1.5zm5.6 0a.75.75 0 0 0 0 1.5h.6q.14.01.15.14V10c0 .77.31 1.49.83 2.01a2.8 2.8 0 0 0-.83 2v1.1q-.01.14-.14.15h-.61a.75.75 0 0 0 0 1.5h.6c.92 0 1.65-.73 1.65-1.64V14c0-.6.4-1.12.96-1.3a.75.75 0 0 0 0-1.43c-.57-.17-.96-.7-.96-1.29V8.9c0-.9-.73-1.64-1.64-1.64z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlySquareFill.displayName = 'BracketsCurlySquareFill';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareFill, BracketsCurlySquareFill as BracketsCurlySquareFillIcon, BracketsCurlySquareFill as SiBracketsCurlySquareFill };
export default BracketsCurlySquareFill;
export type { BracketsCurlySquareFillProps };
