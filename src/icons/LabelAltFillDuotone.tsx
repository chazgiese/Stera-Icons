import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-fill-duotone" {...props}>
      <path d="m20.06 6-3.04 4.26a3 3 0 0 0 0 3.48L20.06 18H8.03a1 1 0 0 1-.81-.42l-3.58-5a1 1 0 0 1 0-1.16l3.58-5A1 1 0 0 1 8.03 6z" opacity={.4} />
        <path fillRule="evenodd" d="M20.06 4a2 2 0 0 1 1.62 3.16l-3.04 4.26a1 1 0 0 0 0 1.16l3.04 4.26A2 2 0 0 1 20.06 20H8.03a3 3 0 0 1-2.44-1.26l-3.57-5a3 3 0 0 1 0-3.48l3.57-5A3 3 0 0 1 8.03 4zM8.03 6a1 1 0 0 0-.81.42l-3.58 5a1 1 0 0 0 0 1.16l3.58 5a1 1 0 0 0 .8.42h12.04l-3.04-4.26a3 3 0 0 1 0-3.48L20.06 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltFillDuotone.displayName = 'LabelAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltFillDuotone, LabelAltFillDuotone as LabelAltFillDuotoneIcon, LabelAltFillDuotone as SiLabelAltFillDuotone };
export default LabelAltFillDuotone;
export type { LabelAltFillDuotoneProps };
