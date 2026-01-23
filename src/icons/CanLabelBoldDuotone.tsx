import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanLabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanLabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, CanLabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-label-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 2a1 1 0 0 1 .21 1.98l.37.64A7 7 0 0 1 19 8.09v7.82a7 7 0 0 1-.92 3.47l-.64 1.1a3 3 0 0 1-2.6 1.52H9.16a3 3 0 0 1-2.6-1.51l-.64-1.11A7 7 0 0 1 5 15.91V8.09a7 7 0 0 1 .92-3.47l.37-.64A1 1 0 0 1 6.5 2zM8.58 4l-.92 1.61A5 5 0 0 0 7 8.1v7.82a5 5 0 0 0 .66 2.48l.63 1.1c.18.32.51.51.87.51h5.68a1 1 0 0 0 .87-.5l.63-1.11A5 5 0 0 0 17 15.9V8.09a5 5 0 0 0-.66-2.48L15.42 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17 16a5 5 0 0 1-.46 2H7.46A5 5 0 0 1 7 16zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16.54 6A5 5 0 0 1 17 8H7a5 5 0 0 1 .46-2z" />
    </IconBase>
  ))
);

CanLabelBoldDuotone.displayName = 'CanLabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { CanLabelBoldDuotone, CanLabelBoldDuotone as CanLabelBoldDuotoneIcon, CanLabelBoldDuotone as SiCanLabelBoldDuotone };
export default CanLabelBoldDuotone;
export type { CanLabelBoldDuotoneProps };
