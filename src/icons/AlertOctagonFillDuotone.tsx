import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertOctagonFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.21 2c.6 0 1.17.24 1.6.66l4.53 4.54c.42.42.66 1 .66 1.59v6.42c0 .6-.24 1.17-.66 1.6l-4.54 4.53c-.42.42-1 .66-1.59.66H8.79c-.6 0-1.17-.24-1.6-.66L2.67 16.8c-.42-.42-.66-1-.66-1.59V8.79c0-.6.24-1.17.66-1.6L7.2 2.67c.42-.42 1-.66 1.59-.66zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertOctagonFillDuotone.displayName = 'AlertOctagonFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertOctagonFillDuotone, AlertOctagonFillDuotone as AlertOctagonFillDuotoneIcon, AlertOctagonFillDuotone as SiAlertOctagonFillDuotone };
export default AlertOctagonFillDuotone;
export type { AlertOctagonFillDuotoneProps };
