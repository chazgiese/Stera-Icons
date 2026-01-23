import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

StopCircleFillDuotone.displayName = 'StopCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleFillDuotone, StopCircleFillDuotone as StopCircleFillDuotoneIcon, StopCircleFillDuotone as SiStopCircleFillDuotone };
export default StopCircleFillDuotone;
export type { StopCircleFillDuotoneProps };
