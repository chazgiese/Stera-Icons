import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-bold-duotone" {...props}>
      <path d="M18.18 6.92a1 1 0 0 0-1.55 1.27A6 6 0 0 1 12 18h-.59l-1 1 1 1h.87a8 8 0 0 0 5.9-13.08M12 4a8 8 0 0 0-6.17 13.1 1 1 0 0 0 1.55-1.28A6 6 0 0 1 12 6h.58l1-1-1-1z" opacity={0.4} />
        <path fill="currentColor" d="M12.7 15.3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4-1.4L10.42 19l2.3-2.3a1 1 0 0 0 0-1.4M12.7 1.3a1 1 0 1 0-1.4 1.4L13.57 5 11.3 7.3a1 1 0 0 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBoldDuotone.displayName = 'RotationRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightBoldDuotone, RotationRightBoldDuotone as RotationRightBoldDuotoneIcon, RotationRightBoldDuotone as SiRotationRightBoldDuotone };
export default RotationRightBoldDuotone;
export type { RotationRightBoldDuotoneProps };
