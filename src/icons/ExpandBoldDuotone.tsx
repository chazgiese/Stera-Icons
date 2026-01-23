import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-bold-duotone" {...props}>
      <path d="M14.3 14.3a1 1 0 0 1 1.4 0l3.3 3.29V19h-1.41l-3.3-3.3a1 1 0 0 1 0-1.4M8.3 14.3a1 1 0 1 1 1.4 1.4L6.42 19H5v-1.41zM9.7 8.3a1 1 0 0 1-1.4 1.4L5 6.42V5h1.41zM19 5v1.41l-3.3 3.3a1 1 0 1 1-1.4-1.42L17.58 5z" opacity={0.4} />
        <path fill="currentColor" d="M4 15a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1M8 3a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5h-3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ExpandBoldDuotone.displayName = 'ExpandBoldDuotone';

// Triple export pattern (lucide-react style)
export { ExpandBoldDuotone, ExpandBoldDuotone as ExpandBoldDuotoneIcon, ExpandBoldDuotone as SiExpandBoldDuotone };
export default ExpandBoldDuotone;
export type { ExpandBoldDuotoneProps };
