import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedBoldProps = Omit<IconBaseProps, 'children'>;

const SquareDashedBold = memo(
  forwardRef<SVGSVGElement, SquareDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed-bold" {...props}>
      <path d="M4 16a1 1 0 0 1 1 1c0 1.1.9 2 2 2a1 1 0 1 1 0 2 4 4 0 0 1-4-4 1 1 0 0 1 1-1M13.5 19a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2zM20 16a1 1 0 0 1 1 1 4 4 0 0 1-4 4 1 1 0 0 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1M4 9.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M20 9.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M7 3a1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4M17 3a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1 0-2M13.5 3a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

SquareDashedBold.displayName = 'SquareDashedBold';

// Triple export pattern (lucide-react style)
export { SquareDashedBold, SquareDashedBold as SquareDashedBoldIcon, SquareDashedBold as SiSquareDashedBold };
export default SquareDashedBold;
export type { SquareDashedBoldProps };
