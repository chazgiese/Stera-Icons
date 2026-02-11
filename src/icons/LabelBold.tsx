import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldProps = Omit<IconBaseProps, 'children'>;

const LabelBold = memo(
  forwardRef<SVGSVGElement, LabelBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-bold" {...props}>
      <path fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zM9.06 6a3 3 0 0 0-2.44 1.26l-2.98 4.16a1 1 0 0 0 0 1.16l2.98 4.16A3 3 0 0 0 9.06 18H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelBold.displayName = 'LabelBold';

// Triple export pattern (lucide-react style)
export { LabelBold, LabelBold as LabelBoldIcon, LabelBold as SiLabelBold };
export default LabelBold;
export type { LabelBoldProps };
