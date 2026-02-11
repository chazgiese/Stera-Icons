import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 10H4a8 8 0 0 0 8 8zh8a8 8 0 0 0-8-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

// Triple export pattern (lucide-react style)
export { CircleCheckerFill, CircleCheckerFill as CircleCheckerFillIcon, CircleCheckerFill as SiCircleCheckerFill };
export default CircleCheckerFill;
export type { CircleCheckerFillProps };
