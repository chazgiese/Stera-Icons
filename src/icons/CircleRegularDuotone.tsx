import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-duotone" {...props}>
      <path fill="currentColor" d="M12 1.25c5.94 0 10.75 4.81 10.75 10.75h-1.5a9.25 9.25 0 0 0-18.5 0h-1.5C1.25 6.06 6.06 1.25 12 1.25" />
        <path fill="currentColor" d="M2.75 12a9.25 9.25 0 0 0 18.5 0h1.5a10.75 10.75 0 1 1-21.5 0z" opacity={.4} />
    </IconBase>
  ))
);

CircleRegularDuotone.displayName = 'CircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleRegularDuotone, CircleRegularDuotone as CircleRegularDuotoneIcon, CircleRegularDuotone as SiCircleRegularDuotone };
export default CircleRegularDuotone;
export type { CircleRegularDuotoneProps };
