import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-fill-duotone" {...props}>
      <path fill="currentColor" d="M17 6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9.06a3 3 0 0 1-2.44-1.26l-2.98-4.16a1 1 0 0 1 0-1.16l2.98-4.16A3 3 0 0 1 9.06 6z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zM9.06 6a3 3 0 0 0-2.44 1.26l-2.98 4.16a1 1 0 0 0 0 1.16l2.98 4.16A3 3 0 0 0 9.06 18H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelFillDuotone.displayName = 'LabelFillDuotone';

// Triple export pattern (lucide-react style)
export { LabelFillDuotone, LabelFillDuotone as LabelFillDuotoneIcon, LabelFillDuotone as SiLabelFillDuotone };
export default LabelFillDuotone;
export type { LabelFillDuotoneProps };
