import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-duotone" {...props}>
      <path d="M12 3.75a8.25 8.25 0 1 0 0 16.5v1.5a9.75 9.75 0 1 1 0-19.5z" />
        <path d="M12 2.25a9.75 9.75 0 1 1 0 19.5v-1.5a8.25 8.25 0 0 0 0-16.5z" opacity={.4} />
    </IconBase>
  ))
);

CircleRegularDuotone.displayName = 'CircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleRegularDuotone, CircleRegularDuotone as CircleRegularDuotoneIcon, CircleRegularDuotone as SiCircleRegularDuotone };
export default CircleRegularDuotone;
export type { CircleRegularDuotoneProps };
