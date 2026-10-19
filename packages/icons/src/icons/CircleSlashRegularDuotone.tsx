import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.7 17.63q-.49.58-1.07 1.06L5.31 6.37q.48-.58 1.06-1.06z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegularDuotone.displayName = 'CircleSlashRegularDuotone';

// Triple export pattern
export { CircleSlashRegularDuotone, CircleSlashRegularDuotone as CircleSlashRegularDuotoneIcon, CircleSlashRegularDuotone as SiCircleSlashRegularDuotone };
export default CircleSlashRegularDuotone;
export type { CircleSlashRegularDuotoneProps };
