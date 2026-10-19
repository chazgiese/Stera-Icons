import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 7.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.6q-.14.01-.15.16v5.18q.01.15.16.16h.59c.41 0 .75.34.75.75s-.34.75-.75.75h-.6c-.9 0-1.65-.74-1.65-1.66V9.41c0-.92.74-1.66 1.66-1.66zM15.1 7.75c.9 0 1.65.74 1.65 1.66v5.18c0 .92-.74 1.66-1.66 1.66h-.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.6q.13-.01.15-.16V9.41q-.01-.15-.16-.16h-.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleRegular.displayName = 'BracketsSquareCircleRegular';

// Triple export pattern
export { BracketsSquareCircleRegular, BracketsSquareCircleRegular as BracketsSquareCircleRegularIcon, BracketsSquareCircleRegular as SiBracketsSquareCircleRegular };
export default BracketsSquareCircleRegular;
export type { BracketsSquareCircleRegularProps };
