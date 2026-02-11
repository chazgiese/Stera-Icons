import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-duotone" {...props}>
      <path d="M12 20.25A8.25 8.25 0 0 1 3.75 12H12zM12 3.75c4.56 0 8.25 3.7 8.25 8.25H12z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegularDuotone.displayName = 'CircleCheckerRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerRegularDuotone, CircleCheckerRegularDuotone as CircleCheckerRegularDuotoneIcon, CircleCheckerRegularDuotone as SiCircleCheckerRegularDuotone };
export default CircleCheckerRegularDuotone;
export type { CircleCheckerRegularDuotoneProps };
