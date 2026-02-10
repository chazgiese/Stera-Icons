import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillProps = Omit<IconBaseProps, 'children'>;

const LabelAltFill = memo(
  forwardRef<SVGSVGElement, LabelAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-fill" {...props}>
      <path fill="currentColor" d="M20.06 4a2 2 0 0 1 1.62 3.16l-3.04 4.26a1 1 0 0 0 0 1.16l3.04 4.26A2 2 0 0 1 20.06 20H8.03a3 3 0 0 1-2.44-1.26l-3.57-5a3 3 0 0 1 0-3.48l3.57-5A3 3 0 0 1 8.03 4z" />
    </IconBase>
  ))
);

LabelAltFill.displayName = 'LabelAltFill';

// Triple export pattern (lucide-react style)
export { LabelAltFill, LabelAltFill as LabelAltFillIcon, LabelAltFill as SiLabelAltFill };
export default LabelAltFill;
export type { LabelAltFillProps };
