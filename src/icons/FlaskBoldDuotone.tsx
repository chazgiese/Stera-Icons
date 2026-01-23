import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlaskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.5 8.92a3 3 0 0 0 .4 1.51l4.7 8.06A3 3 0 0 1 18.03 23H5.98a3 3 0 0 1-2.59-4.51l4.7-8.06a3 3 0 0 0 .41-1.51V3h2v5.92a5 5 0 0 1-.68 2.52l-4.7 8.06a1 1 0 0 0 .86 1.5h12.04a1 1 0 0 0 .86-1.5l-4.7-8.06a5 5 0 0 1-.68-2.52V3h2z" opacity={.4} />
        <path fill="currentColor" d="M15.5 1a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskBoldDuotone.displayName = 'FlaskBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlaskBoldDuotone, FlaskBoldDuotone as FlaskBoldDuotoneIcon, FlaskBoldDuotone as SiFlaskBoldDuotone };
export default FlaskBoldDuotone;
export type { FlaskBoldDuotoneProps };
