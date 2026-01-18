import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.27 16.93a.75.75 0 0 1 1.04.2 9 9 0 0 0 2.55 2.56.75.75 0 1 1-.83 1.25 11 11 0 0 1-2.97-2.97.75.75 0 0 1 .2-1.04M19.7 17.14a.75.75 0 0 1 1.24.83 11 11 0 0 1-2.97 2.97.75.75 0 0 1-.83-1.25 9 9 0 0 0 2.55-2.55M6.03 3.06a.75.75 0 0 1 .83 1.25 9 9 0 0 0-2.55 2.55.75.75 0 0 1-1.25-.83 11 11 0 0 1 2.97-2.97M16.93 3.27a.75.75 0 0 1 1.04-.2 11 11 0 0 1 2.97 2.96.75.75 0 0 1-1.25.83 9 9 0 0 0-2.55-2.55.75.75 0 0 1-.2-1.04" />
        <path fill="currentColor" d="M13.8 21.07a.75.75 0 0 1 .3 1.47 11 11 0 0 1-4.2 0 .75.75 0 1 1 .3-1.47 9 9 0 0 0 3.6 0M1.46 9.9a.75.75 0 1 1 1.47.3 9 9 0 0 0 0 3.6.75.75 0 0 1-1.47.3 11 11 0 0 1 0-4.2M21.66 9.31c.41-.08.8.19.88.6a11 11 0 0 1 0 4.19.75.75 0 1 1-1.47-.3 9 9 0 0 0 0-3.6c-.08-.41.19-.8.6-.89M12 1.25q1.08 0 2.1.2a.75.75 0 1 1-.3 1.48 9 9 0 0 0-3.6 0 .75.75 0 0 1-.3-1.47q1.02-.21 2.1-.21" />
    </IconBase>
  ))
);

CircleDashRegularDuotone.displayName = 'CircleDashRegularDuotone';

export { CircleDashRegularDuotone };
export type { CircleDashRegularDuotoneProps };
