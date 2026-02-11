import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightFillProps = Omit<IconBaseProps, 'children'>;

const RotationRightFill = memo(
  forwardRef<SVGSVGElement, RotationRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-fill" {...props}>
      <path d="M18.18 6.92a1 1 0 0 0-1.55 1.27A6 6 0 0 1 13 17.9V16a1 1 0 0 0-1.7-.7l-3 3a1 1 0 0 0 0 1.4l3 3A1 1 0 0 0 13 22v-2.06a8 8 0 0 0 5.18-13.02M12.7 1.3A1 1 0 0 0 11 2v2.06A8 8 0 0 0 5.83 17.1a1 1 0 0 0 1.55-1.28A6 6 0 0 1 11 6.1V8a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightFill.displayName = 'RotationRightFill';

// Triple export pattern (lucide-react style)
export { RotationRightFill, RotationRightFill as RotationRightFillIcon, RotationRightFill as SiRotationRightFill };
export default RotationRightFill;
export type { RotationRightFillProps };
