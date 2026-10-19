import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillProps = Omit<IconBaseProps, 'children'>;

const CircleFill = memo(
  forwardRef<SVGSVGElement, CircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75" />
    </IconBase>
  ))
);

CircleFill.displayName = 'CircleFill';

// Triple export pattern
export { CircleFill, CircleFill as CircleFillIcon, CircleFill as SiCircleFill };
export default CircleFill;
export type { CircleFillProps };
