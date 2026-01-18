import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 1.5A3.5 3.5 0 0 1 22.5 5v14a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19V5A3.5 3.5 0 0 1 5 1.5z" />
    </IconBase>
  ))
);

BracketsSquareFillDuotone.displayName = 'BracketsSquareFillDuotone';

export { BracketsSquareFillDuotone };
export type { BracketsSquareFillDuotoneProps };
