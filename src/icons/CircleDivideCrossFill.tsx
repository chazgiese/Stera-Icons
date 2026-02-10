import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFill = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-fill" {...props}>
      <path fill="currentColor" d="M11 21.95A10 10 0 0 1 2.05 13H11zM21.95 13A10 10 0 0 1 13 21.95V13zM11 11H2.05A10 10 0 0 1 11 2.05zM13 2.05A10 10 0 0 1 21.95 11H13z" />
    </IconBase>
  ))
);

CircleDivideCrossFill.displayName = 'CircleDivideCrossFill';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossFill, CircleDivideCrossFill as CircleDivideCrossFillIcon, CircleDivideCrossFill as SiCircleDivideCrossFill };
export default CircleDivideCrossFill;
export type { CircleDivideCrossFillProps };
