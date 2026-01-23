import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-bold-duotone" {...props}>
      <path d="M5.64 5.64a1 1 0 0 1 1.41 1.41A7 7 0 0 0 11.75 19h.84l1 1-1 1h-.9199999999999999A9 9 0 0 1 5.64 5.63M12.33 3a9 9 0 0 1 6.03 15.36 1 1 0 0 1-1.41-1.41A7 7 0 0 0 12.25 5h-.84l-1-1 1-1h.9199999999999999" opacity={0.4} />
        <path fill="currentColor" d="M11.3 16.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4l2.29-2.3-2.3-2.3a1 1 0 0 1 0-1.4M11.3.3a1 1 0 1 1 1.4 1.4L10.42 4l2.3 2.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftBoldDuotone.displayName = 'RotationLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftBoldDuotone, RotationLeftBoldDuotone as RotationLeftBoldDuotoneIcon, RotationLeftBoldDuotone as SiRotationLeftBoldDuotone };
export default RotationLeftBoldDuotone;
export type { RotationLeftBoldDuotoneProps };
