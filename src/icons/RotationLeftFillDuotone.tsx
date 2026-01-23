import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-fill-duotone" {...props}>
      <path d="M5.64 5.64a1 1 0 0 1 1.41 1.41A7 7 0 0 0 11 18.93v2.01a9 9 0 0 1-5.36-15.3M13 3.06a9 9 0 0 1 5.36 15.3 1 1 0 0 1-1.41-1.41A7 7 0 0 0 13 5.07z" opacity={0.4} />
        <path fill="currentColor" d="M11.62 16.08a1 1 0 0 1 1.09.21l3 3a1 1 0 0 1 0 1.42l-3 3A1 1 0 0 1 11 23v-6a1 1 0 0 1 .62-.92M11.3.3A1 1 0 0 1 13 1v6a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftFillDuotone.displayName = 'RotationLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftFillDuotone, RotationLeftFillDuotone as RotationLeftFillDuotoneIcon, RotationLeftFillDuotone as SiRotationLeftFillDuotone };
export default RotationLeftFillDuotone;
export type { RotationLeftFillDuotoneProps };
