import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-bold-duotone" {...props}>
      <path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1.5a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M7.5 3a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

BracketsSquareBoldDuotone.displayName = 'BracketsSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareBoldDuotone, BracketsSquareBoldDuotone as BracketsSquareBoldDuotoneIcon, BracketsSquareBoldDuotone as SiBracketsSquareBoldDuotone };
export default BracketsSquareBoldDuotone;
export type { BracketsSquareBoldDuotoneProps };
