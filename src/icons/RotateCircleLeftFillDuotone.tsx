import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.3 4.3a1 1 0 0 0-1.4 0L7.35 8.21a1.1 1.1 0 0 0 0 1.56l2.93 2.93a1 1 0 0 0 1.42-1.42L10.4 10h2.1a3 3 0 1 1-2.46 4.73 1 1 0 0 0-1.63 1.16A5 5 0 1 0 12.5 8h-2.09l1.3-1.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.3 5.3a1 1 0 0 1 1.4 1.4L10.42 8h2.1a5 5 0 1 1-4.1 7.89 1 1 0 0 1 1.64-1.16A3 3 0 1 0 12.5 10h-2.09l1.3 1.3a1 1 0 0 1-1.42 1.4L7.36 9.79a1.1 1.1 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleLeftFillDuotone.displayName = 'RotateCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftFillDuotone, RotateCircleLeftFillDuotone as RotateCircleLeftFillDuotoneIcon, RotateCircleLeftFillDuotone as SiRotateCircleLeftFillDuotone };
export default RotateCircleLeftFillDuotone;
export type { RotateCircleLeftFillDuotoneProps };
