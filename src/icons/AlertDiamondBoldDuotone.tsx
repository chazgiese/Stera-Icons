import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertDiamondBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-diamond-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.76 1.44a4 4 0 0 1 2.48 0q.75.27 1.38.83.62.53 1.48 1.42l4.21 4.2q.88.87 1.42 1.49.57.63.83 1.38a4 4 0 0 1 0 2.48q-.27.75-.83 1.38-.54.62-1.42 1.48l-4.2 4.21c-.6.59-1.07 1.06-1.5 1.42a4 4 0 0 1-1.37.83 4 4 0 0 1-2.48 0 4 4 0 0 1-1.38-.83q-.62-.54-1.48-1.42l-4.21-4.2c-.59-.6-1.07-1.07-1.42-1.5a4 4 0 0 1-.83-1.37 4 4 0 0 1 0-2.48q.26-.75.83-1.38.53-.62 1.42-1.48l4.2-4.21q.87-.89 1.49-1.42a4 4 0 0 1 1.38-.83m1.86 1.9a2 2 0 0 0-1.24 0c-.17.05-.37.17-.7.45-.35.3-.76.7-1.37 1.31l-4.2 4.21c-.61.6-1.03 1.02-1.32 1.36-.28.34-.4.54-.45.71a2 2 0 0 0 0 1.24c.05.16.17.37.45.7.3.35.7.76 1.31 1.37l4.21 4.2c.6.61 1.02 1.03 1.36 1.32.34.28.54.4.71.45a2 2 0 0 0 1.24 0c.16-.06.37-.17.7-.45.35-.3.76-.7 1.37-1.31l4.2-4.21c.61-.6 1.03-1.02 1.32-1.37.28-.33.4-.54.45-.7a2 2 0 0 0 0-1.24 2 2 0 0 0-.45-.7c-.3-.35-.7-.76-1.31-1.37l-4.21-4.2c-.6-.61-1.02-1.03-1.37-1.32-.33-.28-.54-.4-.7-.45" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertDiamondBoldDuotone.displayName = 'AlertDiamondBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondBoldDuotone, AlertDiamondBoldDuotone as AlertDiamondBoldDuotoneIcon, AlertDiamondBoldDuotone as SiAlertDiamondBoldDuotone };
export default AlertDiamondBoldDuotone;
export type { AlertDiamondBoldDuotoneProps };
