import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-bold-duotone" {...props}>
      <path fill="currentColor" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9a1 1 0 0 0 0-2h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H9a1 1 0 0 0 0-2z" opacity={.4} />
        <path fill="currentColor" d="M9 3a1 1 0 0 1 0 2h-.78a3 3 0 0 0-2.55 1.41l-3.16 5.06a1 1 0 0 0 0 1.06l3.16 5.06A3 3 0 0 0 8.22 19H9a1 1 0 0 1 0 2h-.78a5 5 0 0 1-4.24-2.35L.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 8.22 3z" />
    </IconBase>
  ))
);

LabelBoldDuotone.displayName = 'LabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelBoldDuotone, LabelBoldDuotone as LabelBoldDuotoneIcon, LabelBoldDuotone as SiLabelBoldDuotone };
export type { LabelBoldDuotoneProps };
