import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 20.5c-4.7 0-8.5-3.8-8.5-8.5H12zM12 3.5c4.7 0 8.5 3.8 8.5 8.5H12z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBoldDuotone.displayName = 'CircleCheckerBoldDuotone';

// Triple export pattern
export { CircleCheckerBoldDuotone, CircleCheckerBoldDuotone as CircleCheckerBoldDuotoneIcon, CircleCheckerBoldDuotone as SiCircleCheckerBoldDuotone };
export default CircleCheckerBoldDuotone;
export type { CircleCheckerBoldDuotoneProps };
