import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.2 4.3a1 1 0 1 0-1.4 1.4l.79.8h-1.84a4.75 4.75 0 1 0 3.88 7.5A1 1 0 0 0 14 14.83a2.75 2.75 0 1 1-2.25-4.34h1.84l-.8.8a1 1 0 1 0 1.42 1.4l2.43-2.42a1.1 1.1 0 0 0 0-1.56z" clipRule="evenodd" opacity={.4} />
        <path d="M12.8 6.3a1 1 0 0 1 1.4 0l2.44 2.42a1.1 1.1 0 0 1 0 1.56L14.2 12.7a1 1 0 0 1-1.42-1.42l.8-.79h-1.84A2.75 2.75 0 1 0 14 14.84a1 1 0 0 1 1.63 1.15 4.75 4.75 0 1 1-3.88-7.49h1.84l-.8-.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RotateCircleRightFillDuotone.displayName = 'RotateCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFillDuotone, RotateCircleRightFillDuotone as RotateCircleRightFillDuotoneIcon, RotateCircleRightFillDuotone as SiRotateCircleRightFillDuotone };
export default RotateCircleRightFillDuotone;
export type { RotateCircleRightFillDuotoneProps };
