import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightFillProps = Omit<IconBaseProps, 'children'>;

const RotationRightFill = memo(
  forwardRef<SVGSVGElement, RotationRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.36 5.64a1 1 0 0 0-1.41 1.41A7 7 0 0 1 13 18.93V17a1 1 0 0 0-1.7-.7l-3 3a1 1 0 0 0 0 1.4l3 3A1 1 0 0 0 13 23v-2.06a9 9 0 0 0 5.36-15.3M12.7.3A1 1 0 0 0 11 1v2.06a9 9 0 0 0-5.36 15.3 1 1 0 0 0 1.41-1.41A7 7 0 0 1 11 5.07V7a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightFill.displayName = 'RotationRightFill';

// Triple export pattern (lucide-react style)
export { RotationRightFill, RotationRightFill as RotationRightFillIcon, RotationRightFill as SiRotationRightFill };
export type { RotationRightFillProps };
