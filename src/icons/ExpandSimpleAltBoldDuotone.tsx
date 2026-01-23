import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-bold-duotone" {...props}>
      <path d="M14.3 14.3a1 1 0 0 1 1.4 0l4.3 4.29V20h-1.41l-4.3-4.3a1 1 0 0 1 0-1.4M9.7 8.3a1 1 0 0 1-1.4 1.4L4 5.42V4h1.41z" opacity={0.4} />
        <path fill="currentColor" d="M21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-.9 1H15a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1M9 2a1 1 0 0 1 0 2H4v5a1 1 0 0 1-2 0V3a1 1 0 0 1 .9-1H9" />
    </IconBase>
  ))
);

ExpandSimpleAltBoldDuotone.displayName = 'ExpandSimpleAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltBoldDuotone, ExpandSimpleAltBoldDuotone as ExpandSimpleAltBoldDuotoneIcon, ExpandSimpleAltBoldDuotone as SiExpandSimpleAltBoldDuotone };
export default ExpandSimpleAltBoldDuotone;
export type { ExpandSimpleAltBoldDuotoneProps };
