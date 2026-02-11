import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M9.97 6.47a.75.75 0 0 1 1.06 1.06L9.81 8.75h2.44a4.5 4.5 0 1 1-3.68 7.1.75.75 0 0 1 1.23-.87 3 3 0 1 0 2.45-4.73H9.81l1.22 1.22a.75.75 0 0 1-1.06 1.06L7.54 10.1a.85.85 0 0 1 0-1.2z" />
    </IconBase>
  ))
);

RotateCircleLeftRegularDuotone.displayName = 'RotateCircleLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftRegularDuotone, RotateCircleLeftRegularDuotone as RotateCircleLeftRegularDuotoneIcon, RotateCircleLeftRegularDuotone as SiRotateCircleLeftRegularDuotone };
export default RotateCircleLeftRegularDuotone;
export type { RotateCircleLeftRegularDuotoneProps };
