import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ShieldAlertFillDuotone.displayName = 'ShieldAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertFillDuotone, ShieldAlertFillDuotone as ShieldAlertFillDuotoneIcon, ShieldAlertFillDuotone as SiShieldAlertFillDuotone };
export type { ShieldAlertFillDuotoneProps };
