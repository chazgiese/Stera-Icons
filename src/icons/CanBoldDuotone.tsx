import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanBoldDuotone = memo(
  forwardRef<SVGSVGElement, CanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-bold-duotone" {...props}>
      <path fill="currentColor" d="M18.08 4.62A7 7 0 0 1 19 8.09v7.82a7 7 0 0 1-.92 3.47l-.64 1.1a3 3 0 0 1-2.6 1.52H9.16a3 3 0 0 1-2.6-1.51l-.64-1.11A7 7 0 0 1 5 15.91V8.09a7 7 0 0 1 .92-3.47l.37-.64.21.02h2.08l-.92 1.61A5 5 0 0 0 7 8.1v7.82a5 5 0 0 0 .66 2.48l.63 1.1c.18.32.51.51.87.51h5.68a1 1 0 0 0 .87-.5l.63-1.11A5 5 0 0 0 17 15.9V8.09a5 5 0 0 0-.66-2.48L15.42 4h2.08l.21-.02z" opacity={.4} />
        <path fill="currentColor" d="M17.5 2a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CanBoldDuotone.displayName = 'CanBoldDuotone';

// Triple export pattern (lucide-react style)
export { CanBoldDuotone, CanBoldDuotone as CanBoldDuotoneIcon, CanBoldDuotone as SiCanBoldDuotone };
export default CanBoldDuotone;
export type { CanBoldDuotoneProps };
