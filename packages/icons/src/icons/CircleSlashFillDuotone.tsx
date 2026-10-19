import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.6 19.84c-1.78 1.5-4.08 2.41-6.6 2.41-5.66 0-10.25-4.59-10.25-10.25 0-2.52.9-4.82 2.41-6.6zM12 1.75c5.66 0 10.25 4.59 10.25 10.25 0 2.52-.9 4.82-2.41 6.6L5.4 4.16c1.78-1.5 4.08-2.41 6.6-2.41" opacity={0.4} />
        <path d="M19.84 18.6q-.57.67-1.24 1.24L4.16 5.4q.57-.67 1.24-1.24z" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

// Triple export pattern
export { CircleSlashFillDuotone, CircleSlashFillDuotone as CircleSlashFillDuotoneIcon, CircleSlashFillDuotone as SiCircleSlashFillDuotone };
export default CircleSlashFillDuotone;
export type { CircleSlashFillDuotoneProps };
