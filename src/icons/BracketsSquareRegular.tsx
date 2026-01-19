import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square" {...props}>
      <path fill="currentColor" d="M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsSquareRegular.displayName = 'BracketsSquareRegular';

// Triple export pattern (lucide-react style)
export { BracketsSquareRegular, BracketsSquareRegular as BracketsSquareRegularIcon, BracketsSquareRegular as SiBracketsSquareRegular };
export default BracketsSquareRegular;
export type { BracketsSquareRegularProps };
