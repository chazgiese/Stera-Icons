import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlaskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 8.98q0 .77.37 1.44l3.9 7.14A3 3 0 0 1 16.62 22H7.37a3 3 0 0 1-2.63-4.44l3.9-7.14A3 3 0 0 0 9 8.98V4h2v4.98a5 5 0 0 1-.61 2.4l-3.9 7.14A1 1 0 0 0 7.37 20h9.26a1 1 0 0 0 .88-1.48l-3.9-7.15A5 5 0 0 1 13 8.98V4h2z" opacity={.4} />
        <path fill="currentColor" d="M15 2a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskBoldDuotone.displayName = 'FlaskBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlaskBoldDuotone, FlaskBoldDuotone as FlaskBoldDuotoneIcon, FlaskBoldDuotone as SiFlaskBoldDuotone };
export default FlaskBoldDuotone;
export type { FlaskBoldDuotoneProps };
