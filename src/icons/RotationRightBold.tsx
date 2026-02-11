import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotationRightBold = memo(
  forwardRef<SVGSVGElement, RotationRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-bold" {...props}>
      <path d="M18.18 6.92a1 1 0 0 0-1.55 1.27A6 6 0 0 1 12 18h-.59l1.3-1.3a1 1 0 0 0-1.42-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.42-1.4L11.4 20h.87a8 8 0 0 0 5.9-13.08M12.7 1.3a1 1 0 0 0-1.4 1.4L12.57 4h-.8699999999999999a8 8 0 0 0-5.88 13.1 1 1 0 0 0 1.55-1.28A6 6 0 0 1 11.78 6h.7999999999999999L11.3 7.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBold.displayName = 'RotationRightBold';

// Triple export pattern (lucide-react style)
export { RotationRightBold, RotationRightBold as RotationRightBoldIcon, RotationRightBold as SiRotationRightBold };
export default RotationRightBold;
export type { RotationRightBoldProps };
