import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-fill-duotone" {...props}>
      <path d="M11 13v9.95A11 11 0 0 1 1.05 13zM22.95 13A11 11 0 0 1 13 22.95V13zM11 11H1.05A11 11 0 0 1 11 1.05zM13 1.05A11 11 0 0 1 22.95 11H13z" opacity={0.4} />
        <path fill="currentColor" d="M12 1q.5 0 1 .04V11h9.96a11 11 0 0 1 0 2H13v9.96a11 11 0 0 1-2 0V13H1.04a11 11 0 0 1 0-2H11V1.04Q11.5 1 12 1" />
    </IconBase>
  ))
);

CircleDivideCrossFillDuotone.displayName = 'CircleDivideCrossFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossFillDuotone, CircleDivideCrossFillDuotone as CircleDivideCrossFillDuotoneIcon, CircleDivideCrossFillDuotone as SiCircleDivideCrossFillDuotone };
export type { CircleDivideCrossFillDuotoneProps };
