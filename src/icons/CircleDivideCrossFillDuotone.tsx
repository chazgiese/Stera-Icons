import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-fill-duotone" {...props}>
      <path d="M11 13v8.95A10 10 0 0 1 2.05 13zM21.95 13A10 10 0 0 1 13 21.95V13zM13 2.05A10 10 0 0 1 21.95 11H13zM11 11H2.05A10 10 0 0 1 11 2.05z" opacity={0.4} />
        <path d="M12 2q.5 0 1 .05V11h8.95a10 10 0 0 1 0 2H13v8.95a10 10 0 0 1-2 0V13H2.05a10 10 0 0 1 0-2H11V2.05Q11.5 2 12 2" />
    </IconBase>
  ))
);

CircleDivideCrossFillDuotone.displayName = 'CircleDivideCrossFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossFillDuotone, CircleDivideCrossFillDuotone as CircleDivideCrossFillDuotoneIcon, CircleDivideCrossFillDuotone as SiCircleDivideCrossFillDuotone };
export default CircleDivideCrossFillDuotone;
export type { CircleDivideCrossFillDuotoneProps };
