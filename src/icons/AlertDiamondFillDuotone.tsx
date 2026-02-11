import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-diamond-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M10.45 1.9a5 5 0 0 1 3.1 0c.63.2 1.17.57 1.73 1.04.55.47 1.17 1.1 1.95 1.88l1.95 1.95c.78.78 1.41 1.4 1.88 1.95.47.56.83 1.1 1.04 1.73a5 5 0 0 1 0 3.1c-.2.63-.57 1.17-1.04 1.73-.47.55-1.1 1.17-1.88 1.95l-1.95 1.95c-.78.78-1.4 1.41-1.95 1.88-.56.47-1.1.83-1.73 1.04a5 5 0 0 1-3.1 0 5 5 0 0 1-1.73-1.04c-.55-.47-1.17-1.1-1.95-1.88l-1.95-1.95c-.78-.78-1.41-1.4-1.88-1.95a5 5 0 0 1-1.04-1.73 5 5 0 0 1 0-3.1c.2-.63.57-1.17 1.04-1.73q.7-.8 1.88-1.95l1.95-1.95c.78-.78 1.4-1.41 1.95-1.88.56-.47 1.1-.83 1.73-1.04M12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 0 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertDiamondFillDuotone.displayName = 'AlertDiamondFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondFillDuotone, AlertDiamondFillDuotone as AlertDiamondFillDuotoneIcon, AlertDiamondFillDuotone as SiAlertDiamondFillDuotone };
export default AlertDiamondFillDuotone;
export type { AlertDiamondFillDuotoneProps };
