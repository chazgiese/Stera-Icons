import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-fill" {...props}>
      <path d="M7.5 2.5a1.5 1.5 0 1 1 0 3H6a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1.5a1.5 1.5 0 0 1 0 3H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-1.5a1.5 1.5 0 0 1 0-3H18a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.5a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

BracketsSquareFill.displayName = 'BracketsSquareFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareFill, BracketsSquareFill as BracketsSquareFillIcon, BracketsSquareFill as SiBracketsSquareFill };
export default BracketsSquareFill;
export type { BracketsSquareFillProps };
