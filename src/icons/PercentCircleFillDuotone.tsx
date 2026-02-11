import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.2 5.8a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 1.4 1.4l7-7a1 1 0 0 0 0-1.4m-1.45 5.45a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M14.8 7.8a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4zM14.75 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9.25 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

PercentCircleFillDuotone.displayName = 'PercentCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentCircleFillDuotone, PercentCircleFillDuotone as PercentCircleFillDuotoneIcon, PercentCircleFillDuotone as SiPercentCircleFillDuotone };
export default PercentCircleFillDuotone;
export type { PercentCircleFillDuotoneProps };
