import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-square-fill" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM8.9 7.75c-.9 0-1.65.74-1.65 1.66v5.18c0 .92.74 1.66 1.66 1.66h.59a.75.75 0 0 0 0-1.5h-.6a.16.16 0 0 1-.15-.16V9.41q.01-.15.16-.16h.59a.75.75 0 0 0 0-1.5zm5.6 0a.75.75 0 0 0 0 1.5h.6q.13.01.15.16v5.18q-.01.15-.16.16h-.59a.75.75 0 0 0 0 1.5h.6c.9 0 1.65-.74 1.65-1.66V9.41c0-.92-.74-1.66-1.66-1.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareSquareFill.displayName = 'BracketsSquareSquareFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareFill, BracketsSquareSquareFill as BracketsSquareSquareFillIcon, BracketsSquareSquareFill as SiBracketsSquareSquareFill };
export default BracketsSquareSquareFill;
export type { BracketsSquareSquareFillProps };
