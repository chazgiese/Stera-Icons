import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchFillProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFill = memo(
  forwardRef<SVGSVGElement, CircleNotchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill" {...props}>
      <path fill="currentColor" d="M18.01 3.87a1.5 1.5 0 0 1 2.12 0 11.5 11.5 0 1 1-16.26 0 1.5 1.5 0 0 1 2.12 2.12 8.5 8.5 0 1 0 12.02 0 1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CircleNotchFill.displayName = 'CircleNotchFill';

// Triple export pattern (lucide-react style)
export { CircleNotchFill, CircleNotchFill as CircleNotchFillIcon, CircleNotchFill as SiCircleNotchFill };
export type { CircleNotchFillProps };
