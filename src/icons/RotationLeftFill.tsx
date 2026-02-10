import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFill = memo(
  forwardRef<SVGSVGElement, RotationLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-fill" {...props}>
      <path fill="currentColor" d="M5.82 6.92a1 1 0 0 1 1.55 1.27A6 6 0 0 0 11 17.9V16a1 1 0 0 1 1.7-.7l3 3a1 1 0 0 1 0 1.4l-3 3A1 1 0 0 1 11 22v-2.06A8 8 0 0 1 5.82 6.92M11.3 1.3A1 1 0 0 1 13 2v2.06a8 8 0 0 1 5.16 13.04 1 1 0 0 1-1.54-1.28A6 6 0 0 0 13 6.1V8a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftFill.displayName = 'RotationLeftFill';

// Triple export pattern (lucide-react style)
export { RotationLeftFill, RotationLeftFill as RotationLeftFillIcon, RotationLeftFill as SiRotationLeftFill };
export default RotationLeftFill;
export type { RotationLeftFillProps };
