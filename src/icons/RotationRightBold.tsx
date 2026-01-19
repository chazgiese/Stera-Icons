import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotationRightBold = memo(
  forwardRef<SVGSVGElement, RotationRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-bold" {...props}>
      <path d="M18.36 5.64a1 1 0 0 0-1.41 1.41A7 7 0 0 1 12.25 19h-.84l1.3-1.3a1 1 0 1 0-1.42-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 1 0 1.42-1.4L11.4 21h.9199999999999999a9 9 0 0 0 6.03-15.36M12.7.3a1 1 0 1 0-1.4 1.4L12.58 3h-.9199999999999999a9 9 0 0 0-6.03 15.36 1 1 0 0 0 1.41-1.41 7 7 0 0 1 4.7-11.94L12 5h.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBold.displayName = 'RotationRightBold';

// Triple export pattern (lucide-react style)
export { RotationRightBold, RotationRightBold as RotationRightBoldIcon, RotationRightBold as SiRotationRightBold };
export type { RotationRightBoldProps };
