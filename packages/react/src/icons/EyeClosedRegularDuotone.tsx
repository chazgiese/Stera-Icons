import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeClosedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedRegularDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 14.4q.7.22 1.45.36l-.7 2.45a.75.75 0 0 1-1.45-.42zM16.2 16.8a.75.75 0 0 1-1.44.4l-.71-2.44q.75-.13 1.46-.36zM3.88 11.47q.5.55 1.1 1.03l-1.97 1.83a.75.75 0 1 1-1.02-1.1zM22.01 13.23a.75.75 0 0 1-1.02 1.1l-1.97-1.83q.59-.48 1.1-1.03z" opacity={0.4} />
        <path fill="currentColor" d="M20.3 8.65a.75.75 0 0 1 1.32.7 10.8 10.8 0 0 1-9.62 5.6 10.8 10.8 0 0 1-9.62-5.6.75.75 0 0 1 1.33-.7 9.3 9.3 0 0 0 8.3 4.8 9.3 9.3 0 0 0 8.28-4.8" />
    </IconBase>
  ))
);

EyeClosedRegularDuotone.displayName = 'EyeClosedRegularDuotone';

// Triple export pattern (lucide-react style)
export { EyeClosedRegularDuotone, EyeClosedRegularDuotone as EyeClosedRegularDuotoneIcon, EyeClosedRegularDuotone as SiEyeClosedRegularDuotone };
export type { EyeClosedRegularDuotoneProps };
