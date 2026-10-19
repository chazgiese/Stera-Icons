import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegular = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75H12v8.75c4.83 0 8.75-3.92 8.75-8.75H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegular.displayName = 'CircleCheckerRegular';

// Triple export pattern
export { CircleCheckerRegular, CircleCheckerRegular as CircleCheckerRegularIcon, CircleCheckerRegular as SiCircleCheckerRegular };
export default CircleCheckerRegular;
export type { CircleCheckerRegularProps };
