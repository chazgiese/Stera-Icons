import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHFill = memo(
  forwardRef<SVGSVGElement, CircleDivideHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.79 11.12c.44-5.25 4.84-9.37 10.2-9.37 5.38 0 9.78 4.12 10.22 9.37zM22.21 12.87c-.44 5.26-4.84 9.38-10.21 9.38s-9.77-4.12-10.21-9.38z" />
    </IconBase>
  ))
);

CircleDivideHFill.displayName = 'CircleDivideHFill';

// Triple export pattern
export { CircleDivideHFill, CircleDivideHFill as CircleDivideHFillIcon, CircleDivideHFill as SiCircleDivideHFill };
export default CircleDivideHFill;
export type { CircleDivideHFillProps };
