import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleCheckerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-bold-duotone" {...props}>
      <path d="M12 21a9 9 0 0 1-9-9h9zM12 3a9 9 0 0 1 9 9h-9z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBoldDuotone.displayName = 'CircleCheckerBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerBoldDuotone, CircleCheckerBoldDuotone as CircleCheckerBoldDuotoneIcon, CircleCheckerBoldDuotone as SiCircleCheckerBoldDuotone };
export default CircleCheckerBoldDuotone;
export type { CircleCheckerBoldDuotoneProps };
