import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-bold-duotone" {...props}>
      <path fill="currentColor" d="M20.75 3a2.25 2.25 0 0 1 1.9 3.44l-3.14 5.03a1 1 0 0 0 0 1.06l3.14 5.03a2.25 2.25 0 0 1-1.9 3.44H9a1 1 0 0 0 0-2h11.75c.2 0 .31-.22.2-.38l-3.14-5.03a3 3 0 0 1 0-3.18l3.15-5.03a.25.25 0 0 0-.21-.38H9a1 1 0 0 0 0-2z" opacity={.4} />
        <path fill="currentColor" d="M9 3a1 1 0 0 1 0 2h-.78a3 3 0 0 0-2.55 1.41l-3.16 5.06a1 1 0 0 0 0 1.06l3.16 5.06A3 3 0 0 0 8.22 19H9a1 1 0 0 1 0 2h-.78a5 5 0 0 1-4.24-2.35L.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 8.22 3z" />
    </IconBase>
  ))
);

LabelAltBoldDuotone.displayName = 'LabelAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltBoldDuotone, LabelAltBoldDuotone as LabelAltBoldDuotoneIcon, LabelAltBoldDuotone as SiLabelAltBoldDuotone };
export default LabelAltBoldDuotone;
export type { LabelAltBoldDuotoneProps };
