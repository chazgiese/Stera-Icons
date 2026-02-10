import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-circle" {...props}>
      <path fill="currentColor" d="M9.5 7.75a.75.75 0 0 1 0 1.5h-.6a.16.16 0 0 0-.15.16v5.18q.01.15.16.16h.59a.75.75 0 0 1 0 1.5h-.6c-.9 0-1.65-.74-1.65-1.66V9.41c0-.92.74-1.66 1.66-1.66zM15.1 7.75c.9 0 1.65.74 1.65 1.66v5.18c0 .92-.74 1.66-1.66 1.66h-.59a.75.75 0 0 1 0-1.5h.6q.13-.01.15-.16V9.41a.16.16 0 0 0-.16-.16h-.59a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleRegular.displayName = 'BracketsSquareCircleRegular';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleRegular, BracketsSquareCircleRegular as BracketsSquareCircleRegularIcon, BracketsSquareCircleRegular as SiBracketsSquareCircleRegular };
export default BracketsSquareCircleRegular;
export type { BracketsSquareCircleRegularProps };
