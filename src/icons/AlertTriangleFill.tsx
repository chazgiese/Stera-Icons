import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertTriangleFillProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleFill = memo(
  forwardRef<SVGSVGElement, AlertTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-triangle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.37 2.4a4 4 0 0 1 3.26 0c.7.3 1.23.9 1.7 1.58.5.7 1.03 1.64 1.7 2.82l3.73 6.52.9 1.58q.39.7.65 1.28c.34.76.58 1.5.5 2.25a4 4 0 0 1-1.63 2.81c-.62.45-1.38.6-2.2.69q-1.25.09-3.25.07H8.27q-2 .02-3.24-.07a4.3 4.3 0 0 1-2.2-.7 4 4 0 0 1-1.64-2.8c-.08-.76.16-1.5.5-2.25q.54-1.13 1.55-2.86L6.96 6.8q1-1.77 1.7-2.82c.48-.69 1-1.27 1.7-1.58M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a1 1 0 0 0-1 1v3.1a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertTriangleFill.displayName = 'AlertTriangleFill';

// Triple export pattern (lucide-react style)
export { AlertTriangleFill, AlertTriangleFill as AlertTriangleFillIcon, AlertTriangleFill as SiAlertTriangleFill };
export type { AlertTriangleFillProps };
