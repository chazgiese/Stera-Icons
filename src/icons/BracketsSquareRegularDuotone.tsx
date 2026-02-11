import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-duotone" {...props}>
      <path d="M18 3.25A2.75 2.75 0 0 1 20.75 6v12A2.75 2.75 0 0 1 18 20.75h-1.5a.75.75 0 0 1 0-1.5H18c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M7.5 3.25a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 18V6A2.75 2.75 0 0 1 6 3.25z" />
    </IconBase>
  ))
);

BracketsSquareRegularDuotone.displayName = 'BracketsSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareRegularDuotone, BracketsSquareRegularDuotone as BracketsSquareRegularDuotoneIcon, BracketsSquareRegularDuotone as SiBracketsSquareRegularDuotone };
export default BracketsSquareRegularDuotone;
export type { BracketsSquareRegularDuotoneProps };
