import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-fill-duotone" {...props}>
      <path fill="currentColor" d="M3.14 9.91a1.5 1.5 0 0 1 2.09.37l3.74 5.34-1.27 1.36a1.5 1.5 0 0 0-.13 1.88L2.77 12a1.5 1.5 0 0 1 .37-2.09" opacity={.4} />
        <path fill="currentColor" d="M18.9 4.98a1.5 1.5 0 0 1 2.2 2.04l-11.2 12a1.5 1.5 0 0 1-2.2-2.04z" />
    </IconBase>
  ))
);

CheckFillDuotone.displayName = 'CheckFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckFillDuotone, CheckFillDuotone as CheckFillDuotoneIcon, CheckFillDuotone as SiCheckFillDuotone };
export default CheckFillDuotone;
export type { CheckFillDuotoneProps };
