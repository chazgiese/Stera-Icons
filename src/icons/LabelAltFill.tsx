import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelAltFillProps = Omit<IconBaseProps, 'children'>;

const LabelAltFill = memo(
  forwardRef<SVGSVGElement, LabelAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-fill" {...props}>
      <path fill="currentColor" d="M20.75 3a2.25 2.25 0 0 1 1.9 3.44l-3.14 5.03a1 1 0 0 0 0 1.06l3.14 5.03a2.25 2.25 0 0 1-1.9 3.44H7.1a3 3 0 0 1-2.55-1.41l-3.75-6a3 3 0 0 1 0-3.18l3.75-6A3 3 0 0 1 7.11 3z" />
    </IconBase>
  ))
);

LabelAltFill.displayName = 'LabelAltFill';

// Triple export pattern (lucide-react style)
export { LabelAltFill, LabelAltFill as LabelAltFillIcon, LabelAltFill as SiLabelAltFill };
export default LabelAltFill;
export type { LabelAltFillProps };
