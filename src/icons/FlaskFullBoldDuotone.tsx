import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-bold-duotone" {...props}>
      <path d="M15 8.98q0 .77.37 1.44l3.9 7.14A3 3 0 0 1 16.62 22H7.37a3 3 0 0 1-2.64-4.44l3.9-7.14A3 3 0 0 0 9 8.98V4h2v4.98a5 5 0 0 1-.61 2.4l-3.9 7.14A1 1 0 0 0 7.37 20h9.26a1 1 0 0 0 .88-1.48l-3.9-7.15A5 5 0 0 1 13 8.98V4h2z" opacity={.4} />
        <path d="m15.77 15.33-.93-.13a3 3 0 0 0-2.03.46 4.9 4.9 0 0 1-4.65.43l-.28-.12.97-1.77.1.05c.9.38 1.94.29 2.75-.25a5 5 0 0 1 2.9-.83zM15 2a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskFullBoldDuotone.displayName = 'FlaskFullBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFullBoldDuotone, FlaskFullBoldDuotone as FlaskFullBoldDuotoneIcon, FlaskFullBoldDuotone as SiFlaskFullBoldDuotone };
export default FlaskFullBoldDuotone;
export type { FlaskFullBoldDuotoneProps };
