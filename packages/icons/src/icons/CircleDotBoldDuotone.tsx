import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
    </IconBase>
  ))
);

CircleDotBoldDuotone.displayName = 'CircleDotBoldDuotone';

// Triple export pattern
export { CircleDotBoldDuotone, CircleDotBoldDuotone as CircleDotBoldDuotoneIcon, CircleDotBoldDuotone as SiCircleDotBoldDuotone };
export default CircleDotBoldDuotone;
export type { CircleDotBoldDuotoneProps };
