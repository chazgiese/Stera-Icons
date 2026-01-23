import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegular = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5A9.25 9.25 0 0 0 2.75 12H12v9.25c5.1 0 9.25-4.14 9.25-9.25H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegular.displayName = 'CircleCheckerRegular';

// Triple export pattern (lucide-react style)
export { CircleCheckerRegular, CircleCheckerRegular as CircleCheckerRegularIcon, CircleCheckerRegular as SiCircleCheckerRegular };
export default CircleCheckerRegular;
export type { CircleCheckerRegularProps };
