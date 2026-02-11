import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-bold-duotone" {...props}>
      <path d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1 1 1 0 0 0 1.63-1.15A3 3 0 0 0 9.06 18H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9.06a3 3 0 0 0-2.44 1.26A1 1 0 0 0 5 6.08 5 5 0 0 1 9.06 4z" opacity={.4} />
        <path d="M4.99 6.1a1 1 0 1 1 1.63 1.16l-2.98 4.16a1 1 0 0 0 0 1.16l2.98 4.16a1 1 0 0 1-1.63 1.17l-2.97-4.17a3 3 0 0 1 0-3.48z" />
    </IconBase>
  ))
);

LabelBoldDuotone.displayName = 'LabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelBoldDuotone, LabelBoldDuotone as LabelBoldDuotoneIcon, LabelBoldDuotone as SiLabelBoldDuotone };
export default LabelBoldDuotone;
export type { LabelBoldDuotoneProps };
