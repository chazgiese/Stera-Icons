import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-square-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zM8.4 6.5a1.9 1.9 0 0 0-1.9 1.9v7.2c0 1.05.85 1.9 1.9 1.9H9a1 1 0 1 0 0-2h-.5v-7H9a1 1 0 1 0 0-2zm6.6 0a1 1 0 1 0 0 2h.5v7H15a1 1 0 1 0 0 2h.6a1.9 1.9 0 0 0 1.9-1.9V8.4a1.9 1.9 0 0 0-1.9-1.9z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 6.5a1 1 0 0 1 0 2h-.5v7H9a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V8.4c0-1.05.85-1.9 1.9-1.9zM15.6 6.5c1.05 0 1.9.85 1.9 1.9v7.2a1.9 1.9 0 0 1-1.9 1.9H15a1 1 0 1 1 0-2h.5v-7H15a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsSquareSquareFillDuotone.displayName = 'BracketsSquareSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareFillDuotone, BracketsSquareSquareFillDuotone as BracketsSquareSquareFillDuotoneIcon, BracketsSquareSquareFillDuotone as SiBracketsSquareSquareFillDuotone };
export default BracketsSquareSquareFillDuotone;
export type { BracketsSquareSquareFillDuotoneProps };
