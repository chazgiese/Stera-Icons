import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-bold-duotone" {...props}>
      <path d="m14.59 5 1 1-1 1H12a6.5 6.5 0 1 0 6.5 6.5 1 1 0 1 1 2 0A8.5 8.5 0 1 1 12 5z" opacity={.4} />
        <path d="M12.8 1.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4L15.58 6l-2.8-2.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RotateRightBoldDuotone.displayName = 'RotateRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightBoldDuotone, RotateRightBoldDuotone as RotateRightBoldDuotoneIcon, RotateRightBoldDuotone as SiRotateRightBoldDuotone };
export default RotateRightBoldDuotone;
export type { RotateRightBoldDuotoneProps };
