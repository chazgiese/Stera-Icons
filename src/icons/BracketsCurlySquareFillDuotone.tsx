import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsCurlySquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zM8.9 6.5A1.9 1.9 0 0 0 7 8.4v1.52c0 .51-.33.97-.82 1.13a1 1 0 0 0 0 1.9c.5.16.82.62.82 1.13v1.51c0 1.06.85 1.91 1.9 1.91h.6a1 1 0 1 0 0-2H9v-1.42c0-.78-.29-1.51-.77-2.08.48-.57.77-1.3.77-2.08V8.5h.5a1 1 0 1 0 0-2zm5.6 0a1 1 0 1 0 0 2h.5v1.42c0 .78.29 1.51.77 2.08-.48.57-.77 1.3-.77 2.08v1.42h-.5a1 1 0 1 0 0 2h.6a1.9 1.9 0 0 0 1.9-1.9v-1.52c0-.51.33-.97.82-1.13a1 1 0 0 0 0-1.9A1.2 1.2 0 0 1 17 9.92V8.4a1.9 1.9 0 0 0-1.9-1.91z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 6.5a1 1 0 1 1 0 2H9v1.42c0 .78-.29 1.51-.77 2.08.48.57.77 1.3.77 2.08v1.42h.5a1 1 0 1 1 0 2h-.6A1.9 1.9 0 0 1 7 15.6v-1.52c0-.51-.33-.97-.82-1.13a1 1 0 0 1 0-1.9c.5-.16.82-.62.82-1.13V8.4c0-1.06.85-1.91 1.9-1.91zM15.1 6.5c1.05 0 1.9.85 1.9 1.9v1.52c0 .51.33.97.82 1.13a1 1 0 0 1 0 1.9 1.2 1.2 0 0 0-.82 1.13v1.51a1.9 1.9 0 0 1-1.9 1.91h-.6a1 1 0 1 1 0-2h.5v-1.42c0-.78.29-1.51.77-2.08A3.2 3.2 0 0 1 15 9.92V8.5h-.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsCurlySquareFillDuotone.displayName = 'BracketsCurlySquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareFillDuotone, BracketsCurlySquareFillDuotone as BracketsCurlySquareFillDuotoneIcon, BracketsCurlySquareFillDuotone as SiBracketsCurlySquareFillDuotone };
export default BracketsCurlySquareFillDuotone;
export type { BracketsCurlySquareFillDuotoneProps };
