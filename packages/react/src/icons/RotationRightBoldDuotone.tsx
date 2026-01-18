import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.95 5.64a1 1 0 0 1 1.41 0 9 9 0 0 1-6.03 15.35L12 21h-.59l-1-1 1-1h.85a7 7 0 0 0 4.69-11.95 1 1 0 0 1 0-1.41M13.59 4l-1 1h-.85a7 7 0 0 0-4.69 11.95 1 1 0 0 1-1.41 1.41 9 9 0 0 1 6.03-15.35L12 3h.59z" />
        <path fill="currentColor" d="M12.7 16.3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 1 0 1.4-1.4L10.42 20l2.3-2.3a1 1 0 0 0 0-1.4M12.7.3a1 1 0 1 0-1.4 1.4L13.58 4l-2.3 2.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBoldDuotone.displayName = 'RotationRightBoldDuotone';

export { RotationRightBoldDuotone };
export type { RotationRightBoldDuotoneProps };
