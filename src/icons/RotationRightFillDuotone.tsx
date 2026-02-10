import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-fill-duotone" {...props}>
      <path d="M18.18 6.92a1 1 0 0 0-1.55 1.27A6 6 0 0 1 13 17.9v2.03a8 8 0 0 0 5.18-13.02M11 4.06A8 8 0 0 0 5.83 17.1a1 1 0 0 0 1.55-1.28A6 6 0 0 1 11 6.1z" opacity={0.4} />
        <path fill="currentColor" d="M12.38 15.08a1 1 0 0 0-1.09.21l-3 3a1 1 0 0 0 0 1.42l3 3A1 1 0 0 0 13 22v-6a1 1 0 0 0-.6-.92M12.7 1.3A1 1 0 0 0 11 2v6a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightFillDuotone.displayName = 'RotationRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightFillDuotone, RotationRightFillDuotone as RotationRightFillDuotoneIcon, RotationRightFillDuotone as SiRotationRightFillDuotone };
export default RotationRightFillDuotone;
export type { RotationRightFillDuotoneProps };
