import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-duotone" {...props}>
      <path d="m9.35 18.51-.12.1zM3.57 10.53a.75.75 0 0 1 1.04.18l4.27 6.1-.63.68a.75.75 0 0 0-.07.94l-4.8-6.86a.75.75 0 0 1 .2-1.04" opacity={0.4} />
        <path d="M19.45 5.49a.75.75 0 0 1 1.1 1.02l-11.2 12a.75.75 0 0 1-1.1-1.02z" />
    </IconBase>
  ))
);

CheckRegularDuotone.displayName = 'CheckRegularDuotone';

// Triple export pattern (lucide-react style)
export { CheckRegularDuotone, CheckRegularDuotone as CheckRegularDuotoneIcon, CheckRegularDuotone as SiCheckRegularDuotone };
export default CheckRegularDuotone;
export type { CheckRegularDuotoneProps };
