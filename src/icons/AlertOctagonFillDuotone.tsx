import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertOctagonFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.62 1c.6 0 1.17.24 1.6.66l5.12 5.12c.42.43.66 1 .66 1.6v7.24c0 .6-.24 1.17-.66 1.6l-5.12 5.12c-.43.42-1 .66-1.6.66H8.38c-.6 0-1.17-.24-1.6-.66l-5.12-5.12c-.42-.43-.66-1-.66-1.6V8.38c0-.6.24-1.17.66-1.6l5.12-5.12c.43-.42 1-.66 1.6-.66zM12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertOctagonFillDuotone.displayName = 'AlertOctagonFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertOctagonFillDuotone, AlertOctagonFillDuotone as AlertOctagonFillDuotoneIcon, AlertOctagonFillDuotone as SiAlertOctagonFillDuotone };
export default AlertOctagonFillDuotone;
export type { AlertOctagonFillDuotoneProps };
