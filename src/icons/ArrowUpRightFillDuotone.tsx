import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-fill-duotone" {...props}>
      <path fill="currentColor" d="m13.5 11.91-6.8 6.8a1 1 0 0 1-1.4-1.42l6.79-6.79z" opacity={.4} />
        <path fill="currentColor" d="M9 5a1 1 0 0 0-.7 1.7l9 9A1 1 0 0 0 19 15V6a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightFillDuotone.displayName = 'ArrowUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightFillDuotone, ArrowUpRightFillDuotone as ArrowUpRightFillDuotoneIcon, ArrowUpRightFillDuotone as SiArrowUpRightFillDuotone };
export default ArrowUpRightFillDuotone;
export type { ArrowUpRightFillDuotoneProps };
