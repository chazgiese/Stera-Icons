import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.67 17.26q-.62.8-1.41 1.41L5.33 6.74q.62-.8 1.4-1.41z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBoldDuotone.displayName = 'CircleSlashBoldDuotone';

// Triple export pattern
export { CircleSlashBoldDuotone, CircleSlashBoldDuotone as CircleSlashBoldDuotoneIcon, CircleSlashBoldDuotone as SiCircleSlashBoldDuotone };
export default CircleSlashBoldDuotone;
export type { CircleSlashBoldDuotoneProps };
