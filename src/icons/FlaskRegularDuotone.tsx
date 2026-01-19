import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlaskRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-duotone" {...props}>
      <path fill="currentColor" d="M15.5 1.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" d="M15.25 8.92q0 .87.44 1.64l4.7 8.05a2.75 2.75 0 0 1-2.37 4.14H5.98a2.75 2.75 0 0 1-2.37-4.14l4.7-8.05q.44-.77.44-1.64V2.75h1.5v6.17c0 .84-.22 1.67-.65 2.4l-4.7 8.05c-.48.83.12 1.88 1.08 1.88h12.04c.96 0 1.56-1.05 1.08-1.88l-4.7-8.06a5 5 0 0 1-.65-2.4V2.76h1.5z" opacity={.4} />
    </IconBase>
  ))
);

FlaskRegularDuotone.displayName = 'FlaskRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlaskRegularDuotone, FlaskRegularDuotone as FlaskRegularDuotoneIcon, FlaskRegularDuotone as SiFlaskRegularDuotone };
export type { FlaskRegularDuotoneProps };
