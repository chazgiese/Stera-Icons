import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

StopCircleRegularDuotone.displayName = 'StopCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleRegularDuotone, StopCircleRegularDuotone as StopCircleRegularDuotoneIcon, StopCircleRegularDuotone as SiStopCircleRegularDuotone };
export type { StopCircleRegularDuotoneProps };
