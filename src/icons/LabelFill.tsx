import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillProps = Omit<IconBaseProps, 'children'>;

const LabelFill = memo(
  forwardRef<SVGSVGElement, LabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-fill" {...props}>
      <path fill="currentColor" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4z" />
    </IconBase>
  ))
);

LabelFill.displayName = 'LabelFill';

// Triple export pattern (lucide-react style)
export { LabelFill, LabelFill as LabelFillIcon, LabelFill as SiLabelFill };
export default LabelFill;
export type { LabelFillProps };
