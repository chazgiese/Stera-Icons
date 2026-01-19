import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareBold = memo(
  forwardRef<SVGSVGElement, BracketsSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-bold" {...props}>
      <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v14.1a1 1 0 0 0 1 .9h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-2.85V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v14.15A3 3 0 0 1 19 22h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-.9V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsSquareBold.displayName = 'BracketsSquareBold';

// Triple export pattern (lucide-react style)
export { BracketsSquareBold, BracketsSquareBold as BracketsSquareBoldIcon, BracketsSquareBold as SiBracketsSquareBold };
export default BracketsSquareBold;
export type { BracketsSquareBoldProps };
