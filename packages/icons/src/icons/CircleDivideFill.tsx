import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFill = memo(
  forwardRef<SVGSVGElement, CircleDivideFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 22.21C5.87 21.77 1.74 17.37 1.74 12s4.12-9.77 9.38-10.21zM12.88 1.79c5.25.44 9.37 4.84 9.37 10.21s-4.12 9.77-9.37 10.21z" />
    </IconBase>
  ))
);

CircleDivideFill.displayName = 'CircleDivideFill';

// Triple export pattern
export { CircleDivideFill, CircleDivideFill as CircleDivideFillIcon, CircleDivideFill as SiCircleDivideFill };
export default CircleDivideFill;
export type { CircleDivideFillProps };
