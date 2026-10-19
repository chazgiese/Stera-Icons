import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.79 11.13C2.23 5.87 6.63 1.74 12 1.74s9.77 4.12 10.21 9.38zM22.21 12.88c-.44 5.25-4.84 9.37-10.21 9.37s-9.77-4.12-10.21-9.37z" opacity={0.4} />
        <path d="M22.25 12q0 .45-.04.88H1.8q-.04-.45-.04-.88 0-.45.04-.87h20.42q.04.43.04.87" />
    </IconBase>
  ))
);

CircleDivideHFillDuotone.displayName = 'CircleDivideHFillDuotone';

// Triple export pattern
export { CircleDivideHFillDuotone, CircleDivideHFillDuotone as CircleDivideHFillDuotoneIcon, CircleDivideHFillDuotone as SiCircleDivideHFillDuotone };
export default CircleDivideHFillDuotone;
export type { CircleDivideHFillDuotoneProps };
