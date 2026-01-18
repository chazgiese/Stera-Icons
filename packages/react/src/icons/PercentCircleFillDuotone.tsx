import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m4.7 6.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4l8-8a1 1 0 0 0 0-1.4m-1.45 6.2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 7a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-8 8a1 1 0 1 1-1.4-1.4zM15.25 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M8.75 7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

PercentCircleFillDuotone.displayName = 'PercentCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentCircleFillDuotone, PercentCircleFillDuotone as PercentCircleFillDuotoneIcon, PercentCircleFillDuotone as SiPercentCircleFillDuotone };
export type { PercentCircleFillDuotoneProps };
