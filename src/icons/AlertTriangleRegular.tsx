import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertTriangleRegularProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleRegular = memo(
  forwardRef<SVGSVGElement, AlertTriangleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-triangle" {...props}>
      <path d="M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7.75c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M10.68 3.02c.84-.37 1.8-.37 2.64 0 .56.25.98.71 1.38 1.28q.59.85 1.41 2.3l4.06 7.02q.86 1.45 1.3 2.38c.3.63.49 1.23.43 1.84-.1.91-.58 1.75-1.33 2.29-.5.36-1.1.5-1.8.56q-1.04.07-2.7.06H7.93q-1.68.01-2.71-.06c-.7-.07-1.31-.2-1.8-.56a3.3 3.3 0 0 1-1.33-2.3c-.06-.6.13-1.2.42-1.83q.45-.93 1.3-2.38L7.9 6.6c.56-.96 1-1.74 1.4-2.3.4-.57.83-1.03 1.39-1.28m2.03 1.37c-.45-.2-.97-.2-1.42 0-.18.08-.41.27-.77.77-.35.5-.76 1.2-1.33 2.2l-4.07 7.01c-.57 1-.98 1.7-1.24 2.26-.25.56-.3.85-.28 1.05q.09.77.7 1.24c.17.11.45.22 1.06.27s1.42.06 2.58.06h8.12c1.15 0 1.97 0 2.58-.06.6-.05.9-.16 1.05-.27.4-.3.66-.75.71-1.24.02-.2-.03-.5-.28-1.05-.26-.56-.67-1.26-1.25-2.26l-4.06-7.01c-.57-1-.98-1.7-1.33-2.2s-.59-.69-.77-.77" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertTriangleRegular.displayName = 'AlertTriangleRegular';

// Triple export pattern (lucide-react style)
export { AlertTriangleRegular, AlertTriangleRegular as AlertTriangleRegularIcon, AlertTriangleRegular as SiAlertTriangleRegular };
export default AlertTriangleRegular;
export type { AlertTriangleRegularProps };
