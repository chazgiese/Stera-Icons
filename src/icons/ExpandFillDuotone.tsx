import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-fill-duotone" {...props}>
      <path d="M8.3 14.3a1 1 0 1 1 1.4 1.4L7.42 18 6 16.59zM14.3 14.3a1 1 0 0 1 1.4 0l2.3 2.29L16.59 18l-2.3-2.3a1 1 0 0 1 0-1.4M9.7 8.3a1 1 0 0 1-1.4 1.4L6 7.42 7.41 6zM18 7.41l-2.3 2.3a1 1 0 1 1-1.4-1.42L16.58 6z" opacity={0.4} />
        <path fill="currentColor" d="M3.62 15.08a1 1 0 0 1 1.09.21l4 4A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .62-.92M19.3 15.3a1 1 0 0 1 1.7.7v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-.7-1.7zM8 3a1 1 0 0 1 .7 1.7l-4 4A1 1 0 0 1 3 8V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1.7.7l-4-4A1 1 0 0 1 16 3z" />
    </IconBase>
  ))
);

ExpandFillDuotone.displayName = 'ExpandFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandFillDuotone, ExpandFillDuotone as ExpandFillDuotoneIcon, ExpandFillDuotone as SiExpandFillDuotone };
export default ExpandFillDuotone;
export type { ExpandFillDuotoneProps };
