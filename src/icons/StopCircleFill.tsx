import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillProps = Omit<IconBaseProps, 'children'>;

const StopCircleFill = memo(
  forwardRef<SVGSVGElement, StopCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stop-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleFill.displayName = 'StopCircleFill';

// Triple export pattern (lucide-react style)
export { StopCircleFill, StopCircleFill as StopCircleFillIcon, StopCircleFill as SiStopCircleFill };
export default StopCircleFill;
export type { StopCircleFillProps };
