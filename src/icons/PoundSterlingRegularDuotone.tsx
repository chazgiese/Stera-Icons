import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegularDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-duotone" {...props}>
      <path fill="currentColor" d="M14 11.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M9.25 16.76c0 1.3-.8 2.3-1.6 2.99H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.28-1.45h.03l.46-.22c.3-.16.7-.39 1.1-.68.83-.62 1.44-1.36 1.44-2.14v-3.51h1.5zM12.02 2.8a6.8 6.8 0 0 1 6.61 3.25.75.75 0 1 1-1.26.81 5.3 5.3 0 0 0-5.14-2.57c-1.73.25-2.98 1.4-2.98 3.1v4.36h-1.5V7.39c0-2.62 2-4.26 4.27-4.58" />
    </IconBase>
  ))
);

PoundSterlingRegularDuotone.displayName = 'PoundSterlingRegularDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingRegularDuotone, PoundSterlingRegularDuotone as PoundSterlingRegularDuotoneIcon, PoundSterlingRegularDuotone as SiPoundSterlingRegularDuotone };
export default PoundSterlingRegularDuotone;
export type { PoundSterlingRegularDuotoneProps };
