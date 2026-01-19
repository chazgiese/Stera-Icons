import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

StopCircleBoldDuotone.displayName = 'StopCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleBoldDuotone, StopCircleBoldDuotone as StopCircleBoldDuotoneIcon, StopCircleBoldDuotone as SiStopCircleBoldDuotone };
export default StopCircleBoldDuotone;
export type { StopCircleBoldDuotoneProps };
