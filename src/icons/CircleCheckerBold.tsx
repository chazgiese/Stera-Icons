import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBold = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 0 0-8 8h8v8a8 8 0 0 0 8-8h-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBold.displayName = 'CircleCheckerBold';

// Triple export pattern (lucide-react style)
export { CircleCheckerBold, CircleCheckerBold as CircleCheckerBoldIcon, CircleCheckerBold as SiCircleCheckerBold };
export default CircleCheckerBold;
export type { CircleCheckerBoldProps };
