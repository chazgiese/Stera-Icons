import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m1.7 4.3a1 1 0 0 0-1.4 1.4L13.58 8h-2.1a5 5 0 1 0 4.1 7.89 1 1 0 0 0-1.64-1.16A3 3 0 1 1 11.5 10h2.09l-1.3 1.3a1 1 0 0 0 1.42 1.4l2.93-2.92a1.1 1.1 0 0 0 0-1.56z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.7 5.3a1 1 0 0 0-1.4 1.4L13.58 8h-2.1a5 5 0 1 0 4.1 7.89 1 1 0 0 0-1.64-1.16A3 3 0 1 1 11.5 10h2.09l-1.3 1.3a1 1 0 0 0 1.42 1.4l2.93-2.92a1.1 1.1 0 0 0 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleRightFillDuotone.displayName = 'RotateCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFillDuotone, RotateCircleRightFillDuotone as RotateCircleRightFillDuotoneIcon, RotateCircleRightFillDuotone as SiRotateCircleRightFillDuotone };
export default RotateCircleRightFillDuotone;
export type { RotateCircleRightFillDuotoneProps };
