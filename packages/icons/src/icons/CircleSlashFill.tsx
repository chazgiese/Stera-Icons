import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFill = memo(
  forwardRef<SVGSVGElement, CircleSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.6 19.83c-1.78 1.51-4.08 2.42-6.6 2.42-5.66 0-10.25-4.59-10.25-10.25 0-2.52.91-4.82 2.42-6.6zM12 1.75c5.66 0 10.25 4.59 10.25 10.25 0 2.51-.9 4.81-2.4 6.6L5.4 4.16C7.19 2.66 9.49 1.75 12 1.75" />
    </IconBase>
  ))
);

CircleSlashFill.displayName = 'CircleSlashFill';

// Triple export pattern
export { CircleSlashFill, CircleSlashFill as CircleSlashFillIcon, CircleSlashFill as SiCircleSlashFill };
export default CircleSlashFill;
export type { CircleSlashFillProps };
