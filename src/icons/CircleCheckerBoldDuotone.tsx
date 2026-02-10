import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-bold-duotone" {...props}>
      <path d="M12 20a8 8 0 0 1-8-8h8zM12 4a8 8 0 0 1 8 8h-8z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBoldDuotone.displayName = 'CircleCheckerBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerBoldDuotone, CircleCheckerBoldDuotone as CircleCheckerBoldDuotoneIcon, CircleCheckerBoldDuotone as SiCircleCheckerBoldDuotone };
export default CircleCheckerBoldDuotone;
export type { CircleCheckerBoldDuotoneProps };
