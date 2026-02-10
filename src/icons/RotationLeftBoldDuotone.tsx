import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-bold-duotone" {...props}>
      <path d="M5.82 6.92a1 1 0 0 1 1.55 1.27A6 6 0 0 0 12 18h.59l1 1-1 1h-.87a8 8 0 0 1-5.9-13.08M12 4a8 8 0 0 1 6.16 13.1 1 1 0 0 1-1.54-1.28A6 6 0 0 0 12 6h-.59l-1-1 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M11.3 15.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4l2.29-2.3-2.3-2.3a1 1 0 0 1 0-1.4M11.3 1.3a1 1 0 1 1 1.4 1.4L10.42 5l2.3 2.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftBoldDuotone.displayName = 'RotationLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftBoldDuotone, RotationLeftBoldDuotone as RotationLeftBoldDuotoneIcon, RotationLeftBoldDuotone as SiRotationLeftBoldDuotone };
export default RotationLeftBoldDuotone;
export type { RotationLeftBoldDuotoneProps };
