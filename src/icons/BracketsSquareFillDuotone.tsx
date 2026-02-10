import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-fill-duotone" {...props}>
      <path fill="currentColor" d="M18 2.5A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-1.5a1.5 1.5 0 0 1 0-3H18a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.5a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M7.5 2.5a1.5 1.5 0 1 1 0 3H6a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1.5a1.5 1.5 0 0 1 0 3H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5z" />
    </IconBase>
  ))
);

BracketsSquareFillDuotone.displayName = 'BracketsSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareFillDuotone, BracketsSquareFillDuotone as BracketsSquareFillDuotoneIcon, BracketsSquareFillDuotone as SiBracketsSquareFillDuotone };
export default BracketsSquareFillDuotone;
export type { BracketsSquareFillDuotoneProps };
