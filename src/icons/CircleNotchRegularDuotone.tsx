import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.53 1.26A10.8 10.8 0 0 1 19.6 4.4a.75.75 0 0 0-1.06 1.06 9.25 9.25 0 0 0-13.08 0A.75.75 0 0 0 4.4 4.4a10.8 10.8 0 0 1 7.07-3.14l.53-.01z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.54 4.4c.3-.3.77-.3 1.06 0a10.75 10.75 0 1 1-15.2 0 .75.75 0 0 1 1.06 1.06 9.25 9.25 0 1 0 13.08 0 .75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegularDuotone.displayName = 'CircleNotchRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchRegularDuotone, CircleNotchRegularDuotone as CircleNotchRegularDuotoneIcon, CircleNotchRegularDuotone as SiCircleNotchRegularDuotone };
export type { CircleNotchRegularDuotoneProps };
