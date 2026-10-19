import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12.97 6.47c.3-.3.77-.3 1.06 0l2.43 2.43c.33.33.33.87 0 1.2l-2.43 2.43c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.22-1.22h-2.44c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.01 0 1.9-.5 2.45-1.27.24-.34.7-.42 1.05-.18.33.24.41.7.18 1.05-.82 1.15-2.16 1.9-3.68 1.9-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5h2.44l-1.22-1.22c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

RotateCircleRightRegularDuotone.displayName = 'RotateCircleRightRegularDuotone';

// Triple export pattern
export { RotateCircleRightRegularDuotone, RotateCircleRightRegularDuotone as RotateCircleRightRegularDuotoneIcon, RotateCircleRightRegularDuotone as SiRotateCircleRightRegularDuotone };
export default RotateCircleRightRegularDuotone;
export type { RotateCircleRightRegularDuotoneProps };
