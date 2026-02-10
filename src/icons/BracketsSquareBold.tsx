import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareBold = memo(
  forwardRef<SVGSVGElement, BracketsSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-bold" {...props}>
      <path fill="currentColor" d="M7.5 3a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsSquareBold.displayName = 'BracketsSquareBold';

// Triple export pattern (lucide-react style)
export { BracketsSquareBold, BracketsSquareBold as BracketsSquareBoldIcon, BracketsSquareBold as SiBracketsSquareBold };
export default BracketsSquareBold;
export type { BracketsSquareBoldProps };
