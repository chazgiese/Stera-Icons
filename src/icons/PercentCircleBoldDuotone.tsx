import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M14.8 7.8a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4zM14.75 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9.25 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

PercentCircleBoldDuotone.displayName = 'PercentCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PercentCircleBoldDuotone, PercentCircleBoldDuotone as PercentCircleBoldDuotoneIcon, PercentCircleBoldDuotone as SiPercentCircleBoldDuotone };
export default PercentCircleBoldDuotone;
export type { PercentCircleBoldDuotoneProps };
