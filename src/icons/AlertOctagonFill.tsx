import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonFillProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonFill = memo(
  forwardRef<SVGSVGElement, AlertOctagonFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.21 2c.6 0 1.17.24 1.6.66l4.53 4.54c.42.42.66 1 .66 1.59v6.42c0 .6-.24 1.17-.66 1.6l-4.54 4.53c-.42.42-1 .66-1.59.66H8.79c-.6 0-1.17-.24-1.6-.66L2.67 16.8c-.42-.42-.66-1-.66-1.59V8.79c0-.6.24-1.17.66-1.6L7.2 2.67c.42-.42 1-.66 1.59-.66zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonFill.displayName = 'AlertOctagonFill';

// Triple export pattern (lucide-react style)
export { AlertOctagonFill, AlertOctagonFill as AlertOctagonFillIcon, AlertOctagonFill as SiAlertOctagonFill };
export default AlertOctagonFill;
export type { AlertOctagonFillProps };
