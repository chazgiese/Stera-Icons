import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M9.97 6.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L9.81 8.75h2.44c2.49 0 4.5 2.01 4.5 4.5 0 2.48-2.01 4.5-4.5 4.5-1.52 0-2.86-.75-3.68-1.9-.23-.34-.15-.8.18-1.05.34-.24.81-.16 1.05.18.54.77 1.44 1.27 2.45 1.27 1.66 0 3-1.34 3-3s-1.34-3-3-3H9.81l1.22 1.22c.3.3.3.77 0 1.06s-.77.3-1.06 0L7.54 10.1c-.33-.33-.33-.87 0-1.2z" />
    </IconBase>
  ))
);

RotateCircleLeftRegularDuotone.displayName = 'RotateCircleLeftRegularDuotone';

// Triple export pattern
export { RotateCircleLeftRegularDuotone, RotateCircleLeftRegularDuotone as RotateCircleLeftRegularDuotoneIcon, RotateCircleLeftRegularDuotone as SiRotateCircleLeftRegularDuotone };
export default RotateCircleLeftRegularDuotone;
export type { RotateCircleLeftRegularDuotoneProps };
