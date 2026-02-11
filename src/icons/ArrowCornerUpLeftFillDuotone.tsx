import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-fill-duotone" {...props}>
      <path d="M16 7a4 4 0 0 1 4 4v8a1 1 0 1 1-2 0v-8a2 2 0 0 0-2-2H9V7z" opacity={.4} />
        <path d="M7.3 3.3A1 1 0 0 1 9 4v8a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.07-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFillDuotone.displayName = 'ArrowCornerUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFillDuotone, ArrowCornerUpLeftFillDuotone as ArrowCornerUpLeftFillDuotoneIcon, ArrowCornerUpLeftFillDuotone as SiArrowCornerUpLeftFillDuotone };
export default ArrowCornerUpLeftFillDuotone;
export type { ArrowCornerUpLeftFillDuotoneProps };
