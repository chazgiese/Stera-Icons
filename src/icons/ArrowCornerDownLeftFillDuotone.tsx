import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-fill-duotone" {...props}>
      <path d="M19 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H9v-2h7a2 2 0 0 0 2-2V5a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M7.3 11.3A1 1 0 0 1 9 12v8a1 1 0 0 1-1.7.7l-4-4-.07-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFillDuotone.displayName = 'ArrowCornerDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFillDuotone, ArrowCornerDownLeftFillDuotone as ArrowCornerDownLeftFillDuotoneIcon, ArrowCornerDownLeftFillDuotone as SiArrowCornerDownLeftFillDuotone };
export default ArrowCornerDownLeftFillDuotone;
export type { ArrowCornerDownLeftFillDuotoneProps };
