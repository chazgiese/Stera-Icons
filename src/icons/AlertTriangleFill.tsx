import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertTriangleFillProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleFill = memo(
  forwardRef<SVGSVGElement, AlertTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-triangle-fill" {...props}>
      <path fillRule="evenodd" d="M10.58 2.8c.9-.41 1.94-.41 2.84 0 .62.27 1.08.78 1.49 1.35q.59.87 1.42 2.33l4.06 7.01q.86 1.45 1.31 2.4c.3.64.52 1.3.44 1.97a3.5 3.5 0 0 1-1.42 2.47c-.55.4-1.22.54-1.92.6q-1.06.09-2.74.07H7.94q-1.68.02-2.74-.06c-.7-.07-1.37-.2-1.92-.6a3.5 3.5 0 0 1-1.42-2.48c-.07-.68.14-1.33.44-1.97q.46-.95 1.31-2.4l4.06-7.01Q8.5 5.02 9.1 4.15c.41-.57.87-1.08 1.49-1.36M12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a1 1 0 0 0-1 1V12a1 1 0 0 0 2 0V8.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertTriangleFill.displayName = 'AlertTriangleFill';

// Triple export pattern (lucide-react style)
export { AlertTriangleFill, AlertTriangleFill as AlertTriangleFillIcon, AlertTriangleFill as SiAlertTriangleFill };
export default AlertTriangleFill;
export type { AlertTriangleFillProps };
