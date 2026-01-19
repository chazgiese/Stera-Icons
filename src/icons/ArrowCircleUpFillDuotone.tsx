import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 5a1 1 0 0 0-.7.3l-5 5a1 1 0 1 0 1.4 1.4L11 9.42V17a1 1 0 0 0 2 0V9.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5A1 1 0 0 0 12 6" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 18a1 1 0 0 1-1-1V9.41l-3.3 3.3a1 1 0 1 1-1.4-1.42l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 1 1-1.4 1.42L13 9.4V17a1 1 0 0 1-1 1" />
    </IconBase>
  ))
);

ArrowCircleUpFillDuotone.displayName = 'ArrowCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFillDuotone, ArrowCircleUpFillDuotone as ArrowCircleUpFillDuotoneIcon, ArrowCircleUpFillDuotone as SiArrowCircleUpFillDuotone };
export default ArrowCircleUpFillDuotone;
export type { ArrowCircleUpFillDuotoneProps };
