import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 20.75c-4.83 0-8.75-3.92-8.75-8.75H12zM12 3.25c4.83 0 8.75 3.92 8.75 8.75H12z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegularDuotone.displayName = 'CircleCheckerRegularDuotone';

// Triple export pattern
export { CircleCheckerRegularDuotone, CircleCheckerRegularDuotone as CircleCheckerRegularDuotoneIcon, CircleCheckerRegularDuotone as SiCircleCheckerRegularDuotone };
export default CircleCheckerRegularDuotone;
export type { CircleCheckerRegularDuotoneProps };
