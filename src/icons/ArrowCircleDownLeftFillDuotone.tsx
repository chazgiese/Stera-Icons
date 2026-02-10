import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m10.6 3.53a1 1 0 0 0-1.4 0l-3.96 3.95V9.17a1 1 0 0 0-2 0v5.66a1 1 0 0 0 1 1h5.66a1 1 0 1 0 0-2h-3.24l3.95-3.95a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.12 8.46a1 1 0 1 1 1.42 1.42l-3.95 3.95h3.24a1 1 0 0 1 0 2H9.17a1 1 0 0 1-1-1V9.17a1 1 0 1 1 2 0v3.24z" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFillDuotone.displayName = 'ArrowCircleDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftFillDuotone, ArrowCircleDownLeftFillDuotone as ArrowCircleDownLeftFillDuotoneIcon, ArrowCircleDownLeftFillDuotone as SiArrowCircleDownLeftFillDuotone };
export default ArrowCircleDownLeftFillDuotone;
export type { ArrowCircleDownLeftFillDuotoneProps };
