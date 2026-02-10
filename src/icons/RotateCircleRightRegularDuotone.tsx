import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.97 6.47c.3-.3.77-.3 1.06 0l2.43 2.43c.33.33.33.87 0 1.2l-2.43 2.43a.75.75 0 1 1-1.06-1.06l1.22-1.22h-2.44a3 3 0 1 0 2.45 4.73.75.75 0 0 1 1.23.87 4.5 4.5 0 1 1-3.68-7.1h2.44l-1.22-1.22a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotateCircleRightRegularDuotone.displayName = 'RotateCircleRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightRegularDuotone, RotateCircleRightRegularDuotone as RotateCircleRightRegularDuotoneIcon, RotateCircleRightRegularDuotone as SiRotateCircleRightRegularDuotone };
export default RotateCircleRightRegularDuotone;
export type { RotateCircleRightRegularDuotoneProps };
