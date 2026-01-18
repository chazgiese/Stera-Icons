import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.25 8.92q0 .87.44 1.64l4.7 8.05a2.75 2.75 0 0 1-2.37 4.14H5.98a2.75 2.75 0 0 1-2.37-4.14l4.7-8.05q.44-.77.44-1.64V2.75h1.5v6.17c0 .84-.22 1.67-.65 2.4l-4.7 8.05c-.48.83.12 1.88 1.08 1.88h12.04c.96 0 1.56-1.05 1.08-1.88l-4.7-8.06a5 5 0 0 1-.65-2.4V2.76h1.5z" opacity={.4} />
        <path fill="currentColor" d="M11.84 14.2c.96-.63 2.1-.9 3.24-.73l.63.09.96 1.65-1.8-.26a3.2 3.2 0 0 0-2.2.5 4.7 4.7 0 0 1-4.4.4l-1.06-.44.76-1.3.88.37c.98.42 2.1.31 3-.28M15.5 1.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

FlaskFullRegularDuotone.displayName = 'FlaskFullRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFullRegularDuotone, FlaskFullRegularDuotone as FlaskFullRegularDuotoneIcon, FlaskFullRegularDuotone as SiFlaskFullRegularDuotone };
export type { FlaskFullRegularDuotoneProps };
