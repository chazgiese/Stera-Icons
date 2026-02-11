import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.9 7.75c-.9 0-1.65.74-1.65 1.66v5.18c0 .92.74 1.66 1.66 1.66h.59a.75.75 0 0 0 0-1.5h-.6a.16.16 0 0 1-.15-.16V9.41q.01-.15.16-.16h.59a.75.75 0 0 0 0-1.5zm5.6 0a.75.75 0 0 0 0 1.5h.6q.13.01.15.16v5.18q-.01.15-.16.16h-.59a.75.75 0 0 0 0 1.5h.6c.9 0 1.65-.74 1.65-1.66V9.41c0-.92-.74-1.66-1.66-1.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleFill.displayName = 'BracketsSquareCircleFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleFill, BracketsSquareCircleFill as BracketsSquareCircleFillIcon, BracketsSquareCircleFill as SiBracketsSquareCircleFill };
export default BracketsSquareCircleFill;
export type { BracketsSquareCircleFillProps };
