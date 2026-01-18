import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDashSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegular = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.63 20.01a.75.75 0 0 1 .75 1.3 10.7 10.7 0 0 1-10.76 0 .75.75 0 1 1 .75-1.3 9.2 9.2 0 0 0 9.25 0M2.69 6.62a.75.75 0 1 1 1.3.75 9.2 9.2 0 0 0 0 9.25.75.75 0 0 1-1.3.76 10.7 10.7 0 0 1 0-10.76M20.29 6.35a.75.75 0 0 1 1.02.27 10.7 10.7 0 0 1 0 10.76.75.75 0 1 1-1.3-.75 9.2 9.2 0 0 0 0-9.25.75.75 0 0 1 .28-1.03M12 1.25c1.96 0 3.8.52 5.38 1.44a.75.75 0 1 1-.75 1.3 9.2 9.2 0 0 0-9.25 0 .75.75 0 0 1-.76-1.3A10.7 10.7 0 0 1 12 1.25" />
    </IconBase>
  ))
);

CircleDashSimpleRegular.displayName = 'CircleDashSimpleRegular';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleRegular, CircleDashSimpleRegular as CircleDashSimpleRegularIcon, CircleDashSimpleRegular as SiCircleDashSimpleRegular };
export type { CircleDashSimpleRegularProps };
