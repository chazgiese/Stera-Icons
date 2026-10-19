import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.25c4.83 0 8.75 3.92 8.75 8.75s-3.92 8.75-8.75 8.75S3.25 16.83 3.25 12 7.17 3.25 12 3.25" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleFillDuotone.displayName = 'CircleFillDuotone';

// Triple export pattern
export { CircleFillDuotone, CircleFillDuotone as CircleFillDuotoneIcon, CircleFillDuotone as SiCircleFillDuotone };
export default CircleFillDuotone;
export type { CircleFillDuotoneProps };
