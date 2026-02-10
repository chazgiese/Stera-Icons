import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleBoldDuotone.displayName = 'StopCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleBoldDuotone, StopCircleBoldDuotone as StopCircleBoldDuotoneIcon, StopCircleBoldDuotone as SiStopCircleBoldDuotone };
export default StopCircleBoldDuotone;
export type { StopCircleBoldDuotoneProps };
