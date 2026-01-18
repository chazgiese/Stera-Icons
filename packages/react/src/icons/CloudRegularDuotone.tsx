import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudRegularDuotone = memo(
  forwardRef<SVGSVGElement, CloudRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4.25a6.8 6.8 0 0 1 6.16 4 5.75 5.75 0 0 1-.16 11.5v-1.5a4.25 4.25 0 1 0-.29-8.49.75.75 0 0 1-.76-.5A5.25 5.25 0 0 0 6.75 11v.11a.75.75 0 0 1-.93.74A3.26 3.26 0 0 0 1.75 15c0 1.8 1.46 3.25 3.25 3.25v1.5a4.75 4.75 0 1 1 .3-9.5c.36-3.37 3.22-6 6.7-6" />
        <path fill="currentColor" d="M18 19.75H5v-1.5h13z" opacity={.4} />
    </IconBase>
  ))
);

CloudRegularDuotone.displayName = 'CloudRegularDuotone';

// Triple export pattern (lucide-react style)
export { CloudRegularDuotone, CloudRegularDuotone as CloudRegularDuotoneIcon, CloudRegularDuotone as SiCloudRegularDuotone };
export type { CloudRegularDuotoneProps };
