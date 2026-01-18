import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertTriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlertTriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.47 2.62a3.8 3.8 0 0 1 3.06 0 4 4 0 0 1 1.6 1.5c.48.69 1.01 1.62 1.69 2.8l3.73 6.53q1 1.72 1.53 2.83c.34.75.55 1.44.48 2.12a3.8 3.8 0 0 1-1.53 2.64 4 4 0 0 1-2.08.64q-1.22.09-3.22.07H8.27q-2 .02-3.22-.07a4 4 0 0 1-2.08-.64 3.8 3.8 0 0 1-1.53-2.64c-.07-.68.14-1.37.48-2.12q.53-1.1 1.53-2.83l3.73-6.53c.68-1.18 1.2-2.11 1.69-2.8a4 4 0 0 1 1.6-1.5M12.92 4a2.3 2.3 0 0 0-1.84 0c-.26.12-.55.38-.99 1-.42.6-.92 1.47-1.6 2.68l-3.74 6.52a38 38 0 0 0-1.47 2.71c-.3.68-.38 1.06-.35 1.34.07.63.4 1.2.92 1.58.23.17.6.3 1.34.36.73.07 1.7.07 3.08.07h7.46c1.37 0 2.35 0 3.08-.07.74-.07 1.11-.2 1.34-.36.52-.37.85-.95.92-1.58.03-.28-.05-.66-.35-1.34-.31-.67-.8-1.52-1.48-2.7l-3.72-6.53a39 39 0 0 0-1.62-2.69c-.43-.61-.72-.87-.98-.99" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 8.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V9c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertTriangleRegularDuotone.displayName = 'AlertTriangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlertTriangleRegularDuotone, AlertTriangleRegularDuotone as AlertTriangleRegularDuotoneIcon, AlertTriangleRegularDuotone as SiAlertTriangleRegularDuotone };
export type { AlertTriangleRegularDuotoneProps };
