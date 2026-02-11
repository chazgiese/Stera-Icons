import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-fill-duotone" {...props}>
      <path d="M8.3 14.3a1 1 0 1 1 1.4 1.4L7.42 18 6 16.59zM18 7.41l-2.3 2.3a1 1 0 1 1-1.4-1.42L16.58 6z" opacity={0.4} />
        <path d="M2.62 14.08a1 1 0 0 1 1.09.21l6 6A1 1 0 0 1 9 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 .62-.92M21 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1.7.7l-6-6A1 1 0 0 1 15 2z" />
    </IconBase>
  ))
);

ExpandSimpleFillDuotone.displayName = 'ExpandSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleFillDuotone, ExpandSimpleFillDuotone as ExpandSimpleFillDuotoneIcon, ExpandSimpleFillDuotone as SiExpandSimpleFillDuotone };
export default ExpandSimpleFillDuotone;
export type { ExpandSimpleFillDuotoneProps };
