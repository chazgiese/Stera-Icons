import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M12 12H3.25c0 4.83 3.92 8.75 8.75 8.75zh8.75c0-4.83-3.92-8.75-8.75-8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

// Triple export pattern
export { CircleCheckerFill, CircleCheckerFill as CircleCheckerFillIcon, CircleCheckerFill as SiCircleCheckerFill };
export default CircleCheckerFill;
export type { CircleCheckerFillProps };
