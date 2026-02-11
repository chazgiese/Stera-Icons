import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-diamond-duotone" {...props}>
      <path fillRule="evenodd" d="M10.53 2.14a4.8 4.8 0 0 1 2.94 0c.59.2 1.1.53 1.65 1q.78.68 1.94 1.86L19 6.94c.79.79 1.4 1.4 1.87 1.94.46.55.8 1.06 1 1.65.3.96.3 1.98 0 2.94-.2.59-.54 1.1-1 1.64s-1.08 1.16-1.87 1.95L17.06 19c-.79.79-1.4 1.4-1.95 1.87-.54.46-1.05.8-1.64 1-.96.3-1.98.3-2.94 0-.59-.2-1.1-.54-1.64-1S7.73 19.79 6.94 19L5 17.06c-.79-.79-1.4-1.4-1.87-1.95a5 5 0 0 1-.99-1.64 4.8 4.8 0 0 1 0-2.94c.2-.59.53-1.1 1-1.65C3.58 8.35 4.2 7.73 5 6.94L6.94 5c.79-.79 1.4-1.4 1.94-1.87.55-.46 1.06-.8 1.65-.99M13 3.57a3.3 3.3 0 0 0-2 0c-.33.1-.67.3-1.14.7-.49.42-1.05.99-1.86 1.79L6.06 8c-.8.8-1.37 1.38-1.78 1.86-.4.47-.6.81-.71 1.14a3.3 3.3 0 0 0 0 2c.1.33.3.67.7 1.14.42.48.98 1.06 1.79 1.86L8 17.94c.8.8 1.38 1.37 1.86 1.78.47.4.81.6 1.14.71.65.22 1.35.22 2 0 .33-.1.67-.3 1.14-.7.48-.42 1.05-.98 1.86-1.79L17.94 16c.8-.8 1.37-1.37 1.78-1.86.4-.47.6-.81.71-1.14.22-.65.22-1.35 0-2-.1-.33-.3-.67-.7-1.14-.42-.48-.98-1.05-1.79-1.86L16 6.06c-.8-.8-1.37-1.37-1.86-1.78-.47-.4-.81-.6-1.14-.71" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.75c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertDiamondRegularDuotone.displayName = 'AlertDiamondRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondRegularDuotone, AlertDiamondRegularDuotone as AlertDiamondRegularDuotoneIcon, AlertDiamondRegularDuotone as SiAlertDiamondRegularDuotone };
export default AlertDiamondRegularDuotone;
export type { AlertDiamondRegularDuotoneProps };
