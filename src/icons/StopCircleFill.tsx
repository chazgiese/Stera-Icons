import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillProps = Omit<IconBaseProps, 'children'>;

const StopCircleFill = memo(
  forwardRef<SVGSVGElement, StopCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M9.75 8.25c-.83 0-1.5.67-1.5 1.5v4.5c0 .83.67 1.5 1.5 1.5h4.5c.83 0 1.5-.67 1.5-1.5v-4.5c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleFill.displayName = 'StopCircleFill';

// Triple export pattern (lucide-react style)
export { StopCircleFill, StopCircleFill as StopCircleFillIcon, StopCircleFill as SiStopCircleFill };
export default StopCircleFill;
export type { StopCircleFillProps };
