import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-circle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.5a1 1 0 1 1 0 2H9v5h.5a1 1 0 1 1 0 2h-.6A1.9 1.9 0 0 1 7 14.6V9.4c0-1.05.85-1.9 1.9-1.9zM15.1 7.5c1.05 0 1.9.85 1.9 1.9v5.2a1.9 1.9 0 0 1-1.9 1.9h-.6a1 1 0 1 1 0-2h.5v-5h-.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsSquareCircleBoldDuotone.displayName = 'BracketsSquareCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleBoldDuotone, BracketsSquareCircleBoldDuotone as BracketsSquareCircleBoldDuotoneIcon, BracketsSquareCircleBoldDuotone as SiBracketsSquareCircleBoldDuotone };
export default BracketsSquareCircleBoldDuotone;
export type { BracketsSquareCircleBoldDuotoneProps };
