import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H9v2h9a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1" opacity={.4} />
        <path fill="currentColor" d="M7.3 14.7A1 1 0 0 0 9 14V4a1 1 0 0 0-1.7-.7l-5 5-.07.07a1 1 0 0 0 .06 1.34z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFillDuotone.displayName = 'ArrowCornerUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFillDuotone, ArrowCornerUpLeftFillDuotone as ArrowCornerUpLeftFillDuotoneIcon, ArrowCornerUpLeftFillDuotone as SiArrowCornerUpLeftFillDuotone };
export default ArrowCornerUpLeftFillDuotone;
export type { ArrowCornerUpLeftFillDuotoneProps };
