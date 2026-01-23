import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletRegularDuotone = memo(
  forwardRef<SVGSVGElement, DropletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-duotone" {...props}>
      <path fill="currentColor" d="m12.4 1.37.07.04.02.02.07.06a23 23 0 0 1 1.2 1.03c.76.7 1.78 1.69 2.8 2.85a23 23 0 0 1 2.85 3.94 9.6 9.6 0 0 1 1.34 4.5 8.85 8.85 0 0 1-8.3 8.93l-.45.01v-1.5a7.34 7.34 0 0 0 7.25-7.43 8 8 0 0 0-1.16-3.79 21 21 0 0 0-2.65-3.67A35 35 0 0 0 12 2.98l.14-.12q.16-.15.24-.2l.07-.06.01-.01a.75.75 0 0 0-.08-1.24z" opacity={.4} />
        <path fill="currentColor" d="M11.53 1.41a.75.75 0 1 1 .94 1.18l-.02.01-.07.05a22 22 0 0 0-1.13.98 35 35 0 0 0-2.69 2.73 21 21 0 0 0-2.65 3.67 8 8 0 0 0-1.16 3.79A7.34 7.34 0 0 0 12 21.25v1.5a8.84 8.84 0 0 1-8.75-8.93c0-1.54.56-3.09 1.34-4.51a23 23 0 0 1 2.85-3.94 37 37 0 0 1 4-3.88l.07-.06z" />
    </IconBase>
  ))
);

DropletRegularDuotone.displayName = 'DropletRegularDuotone';

// Triple export pattern (lucide-react style)
export { DropletRegularDuotone, DropletRegularDuotone as DropletRegularDuotoneIcon, DropletRegularDuotone as SiDropletRegularDuotone };
export default DropletRegularDuotone;
export type { DropletRegularDuotoneProps };
