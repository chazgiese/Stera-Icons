import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopCircleRegularProps = Omit<IconBaseProps, 'children'>;

const StopCircleRegular = memo(
  forwardRef<SVGSVGElement, StopCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle" {...props}>
      <path fill="currentColor" d="M15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleRegular.displayName = 'StopCircleRegular';

// Triple export pattern (lucide-react style)
export { StopCircleRegular, StopCircleRegular as StopCircleRegularIcon, StopCircleRegular as SiStopCircleRegular };
export default StopCircleRegular;
export type { StopCircleRegularProps };
