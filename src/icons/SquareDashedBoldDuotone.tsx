import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquareDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed-bold-duotone" {...props}>
      <path d="M13.75 19.5a1 1 0 1 1 0 2h-3.5a1 1 0 1 1 0-2zM3.5 9.25a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M20.5 9.25a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M13.75 2.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1 0-2z" opacity={0.4} />
        <path d="M3.5 16.31a1 1 0 0 1 1 1v.19c0 1.1.9 2 2 2h.19a1 1 0 1 1 0 2H6.5a4 4 0 0 1-4-4v-.19a1 1 0 0 1 1-1M20.5 16.31a1 1 0 0 1 1 1v.19a4 4 0 0 1-4 4h-.19a1 1 0 1 1 0-2h.19a2 2 0 0 0 2-2v-.19a1 1 0 0 1 1-1M6.69 2.5a1 1 0 0 1 0 2H6.5a2 2 0 0 0-2 2v.19a1 1 0 0 1-2 0V6.5a4 4 0 0 1 4-4zM17.5 2.5a4 4 0 0 1 4 4v.19a1 1 0 1 1-2 0V6.5a2 2 0 0 0-2-2h-.19a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SquareDashedBoldDuotone.displayName = 'SquareDashedBoldDuotone';

// Triple export pattern (lucide-react style)
export { SquareDashedBoldDuotone, SquareDashedBoldDuotone as SquareDashedBoldDuotoneIcon, SquareDashedBoldDuotone as SiSquareDashedBoldDuotone };
export default SquareDashedBoldDuotone;
export type { SquareDashedBoldDuotoneProps };
