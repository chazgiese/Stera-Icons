import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleRegularDuotone.displayName = 'StopCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleRegularDuotone, StopCircleRegularDuotone as StopCircleRegularDuotoneIcon, StopCircleRegularDuotone as SiStopCircleRegularDuotone };
export default StopCircleRegularDuotone;
export type { StopCircleRegularDuotoneProps };
