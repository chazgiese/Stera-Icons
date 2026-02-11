import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleRegularProps = Omit<IconBaseProps, 'children'>;

const StopCircleRegular = memo(
  forwardRef<SVGSVGElement, StopCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle" {...props}>
      <path d="M14.25 8.25c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-4.5c0-.83.67-1.5 1.5-1.5z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleRegular.displayName = 'StopCircleRegular';

// Triple export pattern (lucide-react style)
export { StopCircleRegular, StopCircleRegular as StopCircleRegularIcon, StopCircleRegular as SiStopCircleRegular };
export default StopCircleRegular;
export type { StopCircleRegularProps };
