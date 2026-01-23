import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-bold-duotone" {...props}>
      <path d="M8 16v1.41l-3.3 3.3a1 1 0 0 1-1.4-1.42L6.58 16zM20.7 19.3a1 1 0 0 1-1.4 1.4L16 17.42V16h1.41zM19.3 3.3a1 1 0 0 1 1.4 1.4L17.42 8H16V6.59zM3.3 3.3a1 1 0 0 1 1.4 0L8 6.58V8H6.59l-3.3-3.3a1 1 0 0 1 0-1.4" opacity={0.4} />
        <path fill="currentColor" d="M9 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-3H5a1 1 0 1 1 0-2zM19 14a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zM9 4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h3V5a1 1 0 0 1 1-1M15 4a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CollapseBoldDuotone.displayName = 'CollapseBoldDuotone';

// Triple export pattern (lucide-react style)
export { CollapseBoldDuotone, CollapseBoldDuotone as CollapseBoldDuotoneIcon, CollapseBoldDuotone as SiCollapseBoldDuotone };
export default CollapseBoldDuotone;
export type { CollapseBoldDuotoneProps };
