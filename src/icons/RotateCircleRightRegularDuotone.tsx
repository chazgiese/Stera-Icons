import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.47 5.47c.3-.3.77-.3 1.06 0l2.93 2.93c.33.33.33.87 0 1.2l-2.93 2.93a.75.75 0 1 1-1.06-1.06l1.72-1.72H11.5a3.25 3.25 0 1 0 2.66 5.12.75.75 0 1 1 1.22.87 4.75 4.75 0 1 1-3.88-7.49h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotateCircleRightRegularDuotone.displayName = 'RotateCircleRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleRightRegularDuotone, RotateCircleRightRegularDuotone as RotateCircleRightRegularDuotoneIcon, RotateCircleRightRegularDuotone as SiRotateCircleRightRegularDuotone };
export default RotateCircleRightRegularDuotone;
export type { RotateCircleRightRegularDuotoneProps };
