import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFill = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.8 4.3a1 1 0 0 0-1.4 0L7.35 8.71a1.1 1.1 0 0 0 0 1.56L9.8 12.7a1 1 0 1 0 1.42-1.42l-.8-.79h1.84A2.75 2.75 0 1 1 10 14.84a1 1 0 0 0-1.63 1.15 4.75 4.75 0 1 0 3.88-7.49h-1.84l.8-.8a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftFill.displayName = 'RotateCircleLeftFill';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftFill, RotateCircleLeftFill as RotateCircleLeftFillIcon, RotateCircleLeftFill as SiRotateCircleLeftFill };
export default RotateCircleLeftFill;
export type { RotateCircleLeftFillProps };
