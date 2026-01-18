import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchRegularProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegular = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.54 4.4c.3-.3.77-.3 1.06 0a10.75 10.75 0 1 1-15.2 0 .75.75 0 0 1 1.06 1.06 9.25 9.25 0 1 0 13.08 0 .75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegular.displayName = 'CircleNotchRegular';

// Triple export pattern (lucide-react style)
export { CircleNotchRegular, CircleNotchRegular as CircleNotchRegularIcon, CircleNotchRegular as SiCircleNotchRegular };
export type { CircleNotchRegularProps };
