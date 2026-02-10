import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.8 4.3a1 1 0 0 0-1.4 0L7.35 8.71a1.1 1.1 0 0 0 0 1.56L9.8 12.7a1 1 0 0 0 1.42-1.42l-.8-.79h1.84A2.75 2.75 0 1 1 10 14.84a1 1 0 0 0-1.63 1.15 4.75 4.75 0 1 0 3.88-7.49h-1.84l.8-.8a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.8 6.3a1 1 0 0 1 1.4 1.4l-.79.8h1.84A4.75 4.75 0 1 1 8.37 16 1 1 0 0 1 10 14.83a2.75 2.75 0 1 0 2.25-4.34h-1.84l.8.8a1 1 0 0 1-1.42 1.4l-2.43-2.42a1.1 1.1 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleLeftFillDuotone.displayName = 'RotateCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftFillDuotone, RotateCircleLeftFillDuotone as RotateCircleLeftFillDuotoneIcon, RotateCircleLeftFillDuotone as SiRotateCircleLeftFillDuotone };
export default RotateCircleLeftFillDuotone;
export type { RotateCircleLeftFillDuotoneProps };
