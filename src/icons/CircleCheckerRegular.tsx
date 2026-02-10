import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegular = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5A8.25 8.25 0 0 0 3.75 12H12v8.25c4.56 0 8.25-3.7 8.25-8.25H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegular.displayName = 'CircleCheckerRegular';

// Triple export pattern (lucide-react style)
export { CircleCheckerRegular, CircleCheckerRegular as CircleCheckerRegularIcon, CircleCheckerRegular as SiCircleCheckerRegular };
export default CircleCheckerRegular;
export type { CircleCheckerRegularProps };
