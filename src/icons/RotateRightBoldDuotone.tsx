import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-bold-duotone" {...props}>
      <path fill="currentColor" d="m14.59 4 1 1-1 1H12a7 7 0 1 0 7 7 1 1 0 1 1 2 0 9 9 0 1 1-9-9z" opacity={.4} />
        <path fill="currentColor" d="M13.7.3a1 1 0 1 0-1.4 1.4L15.58 5l-3.3 3.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotateRightBoldDuotone.displayName = 'RotateRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightBoldDuotone, RotateRightBoldDuotone as RotateRightBoldDuotoneIcon, RotateRightBoldDuotone as SiRotateRightBoldDuotone };
export default RotateRightBoldDuotone;
export type { RotateRightBoldDuotoneProps };
