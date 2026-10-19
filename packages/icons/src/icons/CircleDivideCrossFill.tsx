import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFill = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 22.21c-4.97-.42-8.92-4.37-9.34-9.34h9.34zM22.21 12.88c-.42 4.96-4.37 8.91-9.34 9.33v-9.34zM11.13 11.13H1.79c.42-4.97 4.37-8.92 9.34-9.34zM12.88 1.79c4.96.42 8.91 4.37 9.33 9.34h-9.34z" />
    </IconBase>
  ))
);

CircleDivideCrossFill.displayName = 'CircleDivideCrossFill';

// Triple export pattern
export { CircleDivideCrossFill, CircleDivideCrossFill as CircleDivideCrossFillIcon, CircleDivideCrossFill as SiCircleDivideCrossFill };
export default CircleDivideCrossFill;
export type { CircleDivideCrossFillProps };
