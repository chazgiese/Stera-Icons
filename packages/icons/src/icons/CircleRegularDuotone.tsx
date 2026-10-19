import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25v-1.5c4.83 0 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25z" opacity={.4} />
        <path d="M12 3.25c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75v1.5C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75z" />
    </IconBase>
  ))
);

CircleRegularDuotone.displayName = 'CircleRegularDuotone';

// Triple export pattern
export { CircleRegularDuotone, CircleRegularDuotone as CircleRegularDuotoneIcon, CircleRegularDuotone as SiCircleRegularDuotone };
export default CircleRegularDuotone;
export type { CircleRegularDuotoneProps };
