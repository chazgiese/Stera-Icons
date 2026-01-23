import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFill = memo(
  forwardRef<SVGSVGElement, RotationLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-fill" {...props}>
      <path fill="currentColor" d="M5.64 5.64a1 1 0 0 1 1.41 1.41A7 7 0 0 0 11 18.93V17a1 1 0 0 1 1.7-.7l3 3a1 1 0 0 1 0 1.4l-3 3A1 1 0 0 1 11 23v-2.06a9 9 0 0 1-5.36-15.3M11.3.3A1 1 0 0 1 13 1v2.06a9 9 0 0 1 5.36 15.3 1 1 0 0 1-1.41-1.41A7 7 0 0 0 13 5.07V7a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftFill.displayName = 'RotationLeftFill';

// Triple export pattern (lucide-react style)
export { RotationLeftFill, RotationLeftFill as RotationLeftFillIcon, RotationLeftFill as SiRotationLeftFill };
export default RotationLeftFill;
export type { RotationLeftFillProps };
