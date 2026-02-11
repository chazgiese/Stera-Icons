import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-diamond-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M10.45 1.9a5 5 0 0 1 3.1 0c.63.2 1.17.57 1.73 1.04.55.47 1.17 1.1 1.95 1.88l1.95 1.95c.78.78 1.41 1.4 1.88 1.95.47.56.83 1.1 1.04 1.73a5 5 0 0 1 0 3.1c-.2.63-.57 1.17-1.04 1.73-.47.55-1.1 1.17-1.88 1.95l-1.95 1.95c-.78.78-1.4 1.41-1.95 1.88-.56.47-1.1.83-1.73 1.04a5 5 0 0 1-3.1 0 5 5 0 0 1-1.73-1.04c-.55-.47-1.17-1.1-1.95-1.88l-1.95-1.95c-.78-.78-1.41-1.4-1.88-1.95a5 5 0 0 1-1.04-1.73 5 5 0 0 1 0-3.1c.2-.63.57-1.17 1.04-1.73q.7-.8 1.88-1.95l1.95-1.95c.78-.78 1.4-1.41 1.95-1.88.56-.47 1.1-.83 1.73-1.04m2.48 1.9a3 3 0 0 0-1.86 0c-.28.1-.59.28-1.05.67-.47.4-1.04.96-1.84 1.76L6.23 8.18c-.8.8-1.36 1.37-1.76 1.84s-.57.77-.67 1.05a3 3 0 0 0 0 1.86c.1.28.28.59.67 1.05.4.47.96 1.04 1.76 1.84l1.95 1.95c.8.8 1.37 1.36 1.84 1.76s.77.57 1.05.67a3 3 0 0 0 1.86 0c.28-.1.59-.28 1.05-.67.47-.4 1.04-.96 1.84-1.76l1.95-1.95c.8-.8 1.36-1.37 1.76-1.84s.58-.77.67-1.05a3 3 0 0 0 0-1.86c-.1-.28-.28-.59-.67-1.05-.4-.47-.96-1.03-1.76-1.84l-1.95-1.95c-.8-.8-1.37-1.36-1.84-1.76a3 3 0 0 0-1.05-.67" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertDiamondBoldDuotone.displayName = 'AlertDiamondBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondBoldDuotone, AlertDiamondBoldDuotone as AlertDiamondBoldDuotoneIcon, AlertDiamondBoldDuotone as SiAlertDiamondBoldDuotone };
export default AlertDiamondBoldDuotone;
export type { AlertDiamondBoldDuotoneProps };
