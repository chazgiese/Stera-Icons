import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12.8 6.3a1 1 0 0 1 1.4 0l2.44 2.42a1.1 1.1 0 0 1 0 1.56L14.2 12.7a1 1 0 0 1-1.42-1.42l.8-.79h-1.84A2.75 2.75 0 1 0 14 14.84a1 1 0 0 1 1.63 1.15 4.75 4.75 0 1 1-3.88-7.49h1.84l-.8-.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RotateCircleRightBoldDuotone.displayName = 'RotateCircleRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightBoldDuotone, RotateCircleRightBoldDuotone as RotateCircleRightBoldDuotoneIcon, RotateCircleRightBoldDuotone as SiRotateCircleRightBoldDuotone };
export default RotateCircleRightBoldDuotone;
export type { RotateCircleRightBoldDuotoneProps };
