import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBold = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5H12v8.5c4.7 0 8.5-3.8 8.5-8.5H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBold.displayName = 'CircleCheckerBold';

// Triple export pattern
export { CircleCheckerBold, CircleCheckerBold as CircleCheckerBoldIcon, CircleCheckerBold as SiCircleCheckerBold };
export default CircleCheckerBold;
export type { CircleCheckerBoldProps };
