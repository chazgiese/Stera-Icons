import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-bold-duotone" {...props}>
      <path d="M20.06 4a2 2 0 0 1 1.62 3.16l-3.04 4.26a1 1 0 0 0 0 1.16l3.04 4.26A2 2 0 0 1 20.06 20H8.03a3 3 0 0 1-2.44-1.26l-1.9-2.66a1 1 0 1 0 1.62-1.16l1.9 2.66a1 1 0 0 0 .82.42h12.03l-3.04-4.26a3 3 0 0 1 0-3.48L20.06 6H8.03a1 1 0 0 0-.81.42l-1.9 2.66a1 1 0 1 0-1.63-1.16l1.9-2.66A3 3 0 0 1 8.03 4z" opacity={.4} />
        <path d="M3.69 7.92A1 1 0 1 1 5.3 9.08l-1.67 2.34a1 1 0 0 0 0 1.16l1.67 2.34a1 1 0 1 1-1.62 1.16l-1.67-2.34a3 3 0 0 1 0-3.48z" />
    </IconBase>
  ))
);

LabelAltBoldDuotone.displayName = 'LabelAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltBoldDuotone, LabelAltBoldDuotone as LabelAltBoldDuotoneIcon, LabelAltBoldDuotone as SiLabelAltBoldDuotone };
export default LabelAltBoldDuotone;
export type { LabelAltBoldDuotoneProps };
