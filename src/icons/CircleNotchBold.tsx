import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchBoldProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBold = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-bold" {...props}>
      <path fill="currentColor" d="M18.36 4.22a1 1 0 0 1 1.42 0 11 11 0 1 1-15.56 0 1 1 0 0 1 1.42 1.42 9 9 0 1 0 12.72 0 1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

CircleNotchBold.displayName = 'CircleNotchBold';

// Triple export pattern (lucide-react style)
export { CircleNotchBold, CircleNotchBold as CircleNotchBoldIcon, CircleNotchBold as SiCircleNotchBold };
export type { CircleNotchBoldProps };
