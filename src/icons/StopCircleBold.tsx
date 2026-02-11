import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleBoldProps = Omit<IconBaseProps, 'children'>;

const StopCircleBold = memo(
  forwardRef<SVGSVGElement, StopCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-bold" {...props}>
      <path d="M14.25 8.25c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-4.5c0-.83.67-1.5 1.5-1.5z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleBold.displayName = 'StopCircleBold';

// Triple export pattern (lucide-react style)
export { StopCircleBold, StopCircleBold as StopCircleBoldIcon, StopCircleBold as SiStopCircleBold };
export default StopCircleBold;
export type { StopCircleBoldProps };
