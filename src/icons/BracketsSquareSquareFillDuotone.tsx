import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zM8.9 7.63c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59a.88.88 0 0 0 0-1.75h-.6a.03.03 0 0 1-.03-.04V9.41q0-.04.04-.04h.59a.87.87 0 1 0 0-1.74zm5.6 0a.88.88 0 0 0 0 1.75h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59a.88.88 0 0 0 0 1.74h.6c.98 0 1.78-.8 1.78-1.78V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.63a.87.87 0 1 1 0 1.75h-.6l-.03.03v5.18q0 .03.04.04h.59a.88.88 0 0 1 0 1.74h-.6c-.98 0-1.78-.8-1.78-1.78V9.41c0-.99.8-1.78 1.79-1.78zM15.1 7.63c.98 0 1.78.8 1.78 1.78v5.18c0 .99-.8 1.79-1.79 1.79h-.59a.88.88 0 0 1 0-1.75h.6q.02 0 .03-.04V9.41a.03.03 0 0 0-.04-.04h-.59a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

BracketsSquareSquareFillDuotone.displayName = 'BracketsSquareSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareFillDuotone, BracketsSquareSquareFillDuotone as BracketsSquareSquareFillDuotoneIcon, BracketsSquareSquareFillDuotone as SiBracketsSquareSquareFillDuotone };
export default BracketsSquareSquareFillDuotone;
export type { BracketsSquareSquareFillDuotoneProps };
