import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleCheckerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-duotone" {...props}>
      <path d="M12 21.25A9.25 9.25 0 0 1 2.75 12H12zM12 2.75c5.1 0 9.25 4.14 9.25 9.25H12z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegularDuotone.displayName = 'CircleCheckerRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerRegularDuotone, CircleCheckerRegularDuotone as CircleCheckerRegularDuotoneIcon, CircleCheckerRegularDuotone as SiCircleCheckerRegularDuotone };
export default CircleCheckerRegularDuotone;
export type { CircleCheckerRegularDuotoneProps };
