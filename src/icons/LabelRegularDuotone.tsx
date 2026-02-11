import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-duotone" {...props}>
      <path d="M17 4.25A4.75 4.75 0 0 1 21.75 9v6A4.75 4.75 0 0 1 17 19.75H9.06a4.8 4.8 0 0 1-3.87-1.99.75.75 0 0 0 1.22-.87c.61.85 1.6 1.36 2.65 1.36H17c1.8 0 3.25-1.46 3.25-3.25V9c0-1.8-1.46-3.25-3.25-3.25H9.06c-1.05 0-2.04.5-2.65 1.36a.75.75 0 0 0-1.22-.87 4.8 4.8 0 0 1 3.87-1.99z" opacity={.4} />
        <path d="M5.2 6.24a.75.75 0 0 1 1.21.87l-2.97 4.16a1.25 1.25 0 0 0 0 1.46l2.97 4.16a.75.75 0 0 1-1.22.87L2.22 13.6a2.75 2.75 0 0 1 0-3.2z" />
    </IconBase>
  ))
);

LabelRegularDuotone.displayName = 'LabelRegularDuotone';

// Triple export pattern (lucide-react style)
export { LabelRegularDuotone, LabelRegularDuotone as LabelRegularDuotoneIcon, LabelRegularDuotone as SiLabelRegularDuotone };
export default LabelRegularDuotone;
export type { LabelRegularDuotoneProps };
