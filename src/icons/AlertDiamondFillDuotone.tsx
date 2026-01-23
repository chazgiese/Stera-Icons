import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-diamond-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.76 1.44a4 4 0 0 1 2.48 0q.75.26 1.38.83.62.53 1.48 1.42l4.21 4.2q.88.87 1.42 1.5.57.62.83 1.37a4 4 0 0 1 0 2.48q-.27.75-.83 1.38-.54.62-1.42 1.48l-4.2 4.21c-.6.59-1.07 1.06-1.5 1.42a4 4 0 0 1-1.37.83 4 4 0 0 1-2.48 0 4 4 0 0 1-1.38-.83q-.62-.54-1.48-1.42l-4.21-4.2c-.59-.6-1.07-1.07-1.42-1.5a4 4 0 0 1-.83-1.37 4 4 0 0 1 0-2.48q.26-.75.83-1.38.53-.62 1.42-1.48l4.2-4.21q.87-.89 1.49-1.42a4 4 0 0 1 1.38-.83M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertDiamondFillDuotone.displayName = 'AlertDiamondFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondFillDuotone, AlertDiamondFillDuotone as AlertDiamondFillDuotoneIcon, AlertDiamondFillDuotone as SiAlertDiamondFillDuotone };
export default AlertDiamondFillDuotone;
export type { AlertDiamondFillDuotoneProps };
