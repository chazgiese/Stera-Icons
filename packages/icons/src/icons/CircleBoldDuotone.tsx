import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5v-2c4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5z" opacity={.4} />
        <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5v2C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5z" />
    </IconBase>
  ))
);

CircleBoldDuotone.displayName = 'CircleBoldDuotone';

// Triple export pattern
export { CircleBoldDuotone, CircleBoldDuotone as CircleBoldDuotoneIcon, CircleBoldDuotone as SiCircleBoldDuotone };
export default CircleBoldDuotone;
export type { CircleBoldDuotoneProps };
