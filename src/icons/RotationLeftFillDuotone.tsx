import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-fill-duotone" {...props}>
      <path d="M5.82 6.92a1 1 0 0 1 1.55 1.27A6 6 0 0 0 11 17.9v2.03A8 8 0 0 1 5.82 6.92M13 4.06a8 8 0 0 1 5.16 13.04 1 1 0 0 1-1.54-1.28A6 6 0 0 0 13 6.1z" opacity={0.4} />
        <path fill="currentColor" d="M11.62 15.08a1 1 0 0 1 1.09.21l3 3a1 1 0 0 1 0 1.42l-3 3A1 1 0 0 1 11 22v-6a1 1 0 0 1 .62-.92M11.3 1.3A1 1 0 0 1 13 2v6a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftFillDuotone.displayName = 'RotationLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftFillDuotone, RotationLeftFillDuotone as RotationLeftFillDuotoneIcon, RotationLeftFillDuotone as SiRotationLeftFillDuotone };
export default RotationLeftFillDuotone;
export type { RotationLeftFillDuotoneProps };
