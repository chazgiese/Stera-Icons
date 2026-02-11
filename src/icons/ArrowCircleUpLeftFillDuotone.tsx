import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m4.24 3.24a1 1 0 0 0-1 1v5.66a1 1 0 0 0 2 0v-3.24l3.95 3.95a1 1 0 0 0 1.42-1.42l-3.95-3.95h3.24a1 1 0 0 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17a1 1 0 0 1 0 2h-3.24l3.95 3.95a1 1 0 0 1-1.42 1.42l-3.95-3.95v3.24a1 1 0 0 1-2 0V9.17a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFillDuotone.displayName = 'ArrowCircleUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftFillDuotone, ArrowCircleUpLeftFillDuotone as ArrowCircleUpLeftFillDuotoneIcon, ArrowCircleUpLeftFillDuotone as SiArrowCircleUpLeftFillDuotone };
export default ArrowCircleUpLeftFillDuotone;
export type { ArrowCircleUpLeftFillDuotoneProps };
