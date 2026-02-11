import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-duotone" {...props}>
      <path d="M7.01 15.93a.75.75 0 1 1 1.06 1.06l-1.9 1.9a.75.75 0 0 1-1.07-1.05zM15.92 15.93c.3-.3.77-.3 1.06 0l1.91 1.9a.75.75 0 0 1-1.06 1.07l-1.9-1.91a.75.75 0 0 1 0-1.06M5.1 5.1c.3-.29.77-.29 1.06 0l1.91 1.92a.75.75 0 0 1-1.06 1.06l-1.9-1.91a.75.75 0 0 1 0-1.06M17.83 5.1a.75.75 0 0 1 1.06 1.07L17 8.07a.75.75 0 0 1-1.07-1.05z" opacity={0.4} />
        <path d="M12 17.55c.41 0 .75.34.75.75V21a.75.75 0 0 1-1.5 0v-2.7c0-.41.34-.75.75-.75M5.7 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-2.7a.75.75 0 0 1 0-1.5zM12 2.25c.41 0 .75.34.75.75v2.7a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SpinnerRegularDuotone.displayName = 'SpinnerRegularDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerRegularDuotone, SpinnerRegularDuotone as SpinnerRegularDuotoneIcon, SpinnerRegularDuotone as SiSpinnerRegularDuotone };
export default SpinnerRegularDuotone;
export type { SpinnerRegularDuotoneProps };
