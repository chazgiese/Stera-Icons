import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDashSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleBold = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-bold" {...props}>
      <path fill="currentColor" d="M16.5 19.8a1 1 0 0 1 1 1.73 11 11 0 0 1-11 0 1 1 0 0 1 1-1.73 9 9 0 0 0 9 0M2.47 6.5a1 1 0 0 1 1.73 1 9 9 0 0 0 0 9 1 1 0 0 1-1.73 1 11 11 0 0 1 0-11M20.16 6.13a1 1 0 0 1 1.37.37 11 11 0 0 1 0 11 1 1 0 0 1-1.73-1 9 9 0 0 0 0-9 1 1 0 0 1 .36-1.37M12 1c2 0 3.88.54 5.5 1.47a1 1 0 0 1-1 1.73 9 9 0 0 0-9 0 1 1 0 0 1-1-1.73C8.12 1.54 10 1 12 1" />
    </IconBase>
  ))
);

CircleDashSimpleBold.displayName = 'CircleDashSimpleBold';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleBold, CircleDashSimpleBold as CircleDashSimpleBoldIcon, CircleDashSimpleBold as SiCircleDashSimpleBold };
export default CircleDashSimpleBold;
export type { CircleDashSimpleBoldProps };
