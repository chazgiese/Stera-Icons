import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.68 16.66c.35-.24.81-.14 1.04.2q.97 1.45 2.42 2.42c.34.23.44.7.2 1.04s-.7.43-1.04.2c-1.11-.74-2.08-1.7-2.82-2.82-.23-.35-.14-.81.2-1.04M19.28 16.86c.23-.34.7-.44 1.04-.2s.43.7.2 1.04c-.74 1.11-1.7 2.08-2.82 2.82-.35.23-.81.14-1.04-.2-.24-.35-.14-.81.2-1.04q1.45-.97 2.42-2.42M6.3 3.48c.35-.23.81-.14 1.04.2.24.35.14.81-.2 1.04q-1.45.97-2.42 2.42c-.23.34-.7.44-1.04.2s-.43-.7-.2-1.04c.74-1.11 1.7-2.08 2.82-2.82M16.66 3.68c.23-.34.7-.43 1.04-.2 1.11.74 2.08 1.7 2.82 2.82.23.35.14.81-.2 1.04-.35.24-.81.14-1.04-.2q-.97-1.45-2.42-2.42c-.34-.23-.44-.7-.2-1.04" opacity={0.4} />
        <path d="M13.7 20.58c.41-.08.8.19.89.6s-.18.8-.59.87q-.98.2-2 .2t-2-.2c-.4-.08-.67-.47-.59-.88.08-.4.48-.67.88-.59q.83.17 1.71.17.89 0 1.7-.17M1.95 10c.08-.4.47-.67.88-.59.4.08.67.48.59.88q-.17.83-.17 1.71 0 .89.17 1.7c.08.41-.19.8-.6.89s-.8-.18-.87-.59q-.2-.98-.2-2t.2-2M21.17 9.41c.41-.08.8.18.88.59q.2.98.2 2t-.2 2c-.08.4-.47.67-.88.59-.4-.08-.67-.48-.59-.88q.17-.83.17-1.71 0-.89-.17-1.7c-.08-.41.19-.8.6-.89M12 1.75q1.02 0 2 .2c.4.08.67.47.59.88-.08.4-.48.67-.88.59q-.83-.17-1.71-.17-.89 0-1.7.17c-.41.08-.8-.19-.89-.6s.18-.8.59-.87q.98-.2 2-.2" />
    </IconBase>
  ))
);

CircleDashRegularDuotone.displayName = 'CircleDashRegularDuotone';

// Triple export pattern
export { CircleDashRegularDuotone, CircleDashRegularDuotone as CircleDashRegularDuotoneIcon, CircleDashRegularDuotone as SiCircleDashRegularDuotone };
export default CircleDashRegularDuotone;
export type { CircleDashRegularDuotoneProps };
