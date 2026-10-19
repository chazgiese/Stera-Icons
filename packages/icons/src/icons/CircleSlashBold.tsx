import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBold = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.57 4.58c4.1-4.1 10.75-4.1 14.85 0s4.1 10.74 0 14.84-10.74 4.1-14.85 0-4.1-10.74 0-14.84m.75 2.16C2.7 10.08 2.91 14.93 6 18s7.93 3.3 11.27.66zm12.69-.75c-3.08-3.08-7.93-3.3-11.27-.66l11.93 11.93c2.64-3.34 2.42-8.19-.66-11.27" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBold.displayName = 'CircleSlashBold';

// Triple export pattern
export { CircleSlashBold, CircleSlashBold as CircleSlashBoldIcon, CircleSlashBold as SiCircleSlashBold };
export default CircleSlashBold;
export type { CircleSlashBoldProps };
