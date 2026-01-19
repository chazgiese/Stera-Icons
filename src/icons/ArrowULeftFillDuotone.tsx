import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.5 3a7.5 7.5 0 0 1 0 15H7v-2h8.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M5.3 12.3A1 1 0 0 1 7 13v8a1 1 0 0 1-1.7.7l-4-4-.07-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowULeftFillDuotone.displayName = 'ArrowULeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftFillDuotone, ArrowULeftFillDuotone as ArrowULeftFillDuotoneIcon, ArrowULeftFillDuotone as SiArrowULeftFillDuotone };
export default ArrowULeftFillDuotone;
export type { ArrowULeftFillDuotoneProps };
