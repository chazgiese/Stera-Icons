import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareCircleRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 6.75a.75.75 0 0 1 0 1.5h-.6a.16.16 0 0 0-.15.16v7.18q.01.15.16.16H9a.75.75 0 0 1 0 1.5h-.6c-.9 0-1.65-.74-1.65-1.66V8.41c0-.92.74-1.66 1.66-1.66zM15.6 6.75c.9 0 1.65.74 1.65 1.66v7.18c0 .92-.74 1.66-1.66 1.66H15a.75.75 0 0 1 0-1.5h.6q.13-.01.15-.16V8.41a.16.16 0 0 0-.16-.16H15a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleRegular.displayName = 'BracketsSquareCircleRegular';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleRegular, BracketsSquareCircleRegular as BracketsSquareCircleRegularIcon, BracketsSquareCircleRegular as SiBracketsSquareCircleRegular };
export type { BracketsSquareCircleRegularProps };
