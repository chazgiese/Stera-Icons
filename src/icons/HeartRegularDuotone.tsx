import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeartRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-duotone" {...props}>
      <path fill="currentColor" d="M16.29 3.5A5.5 5.5 0 0 1 21.75 9c0 2.3-1.23 4.08-1.69 4.73-2.21 3.12-5.3 5.26-7.58 7.1a.75.75 0 0 0 0-1.16l-.48-.38c2.29-1.8 4.9-3.71 6.84-6.43A7 7 0 0 0 20.25 9a3.96 3.96 0 0 0-7.6-1.59c.11-.2.14-.47.03-.7A6 6 0 0 0 12 5.59c1-1.27 2.54-2.09 4.29-2.09" opacity={.4} />
        <path fill="currentColor" d="M7.71 3.5c2.21 0 4.11 1.32 4.97 3.2a.75.75 0 0 1-1.36.63A3.96 3.96 0 0 0 3.75 9c0 1.8.97 3.24 1.4 3.86 2.07 2.9 4.93 4.88 7.32 6.8a.75.75 0 0 1-.94 1.17c-2.28-1.83-5.37-3.98-7.6-7.1A8.3 8.3 0 0 1 2.26 9c0-3.03 2.44-5.5 5.46-5.5" />
    </IconBase>
  ))
);

HeartRegularDuotone.displayName = 'HeartRegularDuotone';

// Triple export pattern (lucide-react style)
export { HeartRegularDuotone, HeartRegularDuotone as HeartRegularDuotoneIcon, HeartRegularDuotone as SiHeartRegularDuotone };
export default HeartRegularDuotone;
export type { HeartRegularDuotoneProps };
