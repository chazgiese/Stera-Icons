import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-fill-duotone" {...props}>
      <path d="m7 18.41-2.3 2.3a1 1 0 0 1-1.4-1.42L5.58 17zM20.7 19.3a1 1 0 0 1-1.4 1.4L17 18.42 18.41 17zM3.3 3.3a1 1 0 0 1 1.4 0L7 5.58 5.59 7l-2.3-2.3a1 1 0 0 1 0-1.4M19.3 3.3a1 1 0 0 1 1.4 1.4L18.42 7 17 5.59z" opacity={0.4} />
        <path fill="currentColor" d="M9 14a1 1 0 0 1 1 1v4a1 1 0 0 1-1.7.7l-4-4A1 1 0 0 1 5 14zM19 14a1 1 0 0 1 .7 1.7l-4 4A1 1 0 0 1 14 19v-4a1 1 0 0 1 1-1zM8.3 4.3A1 1 0 0 1 10 5v4a1 1 0 0 1-1 1H5a1 1 0 0 1-.7-1.7zM14.62 4.08a1 1 0 0 1 1.09.21l4 4A1 1 0 0 1 19 10h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

CollapseFillDuotone.displayName = 'CollapseFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseFillDuotone, CollapseFillDuotone as CollapseFillDuotoneIcon, CollapseFillDuotone as SiCollapseFillDuotone };
export type { CollapseFillDuotoneProps };
