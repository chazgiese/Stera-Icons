import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-fill-duotone" {...props}>
      <path d="M16 20H8v-2h8zM20 16h-2V8h2zM6 16H4V8h2zM16 6H8V4h8z" opacity={0.4} />
        <path fill="currentColor" d="M7 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM21 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM7 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM21 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

BoundingBoxFillDuotone.displayName = 'BoundingBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxFillDuotone, BoundingBoxFillDuotone as BoundingBoxFillDuotoneIcon, BoundingBoxFillDuotone as SiBoundingBoxFillDuotone };
export default BoundingBoxFillDuotone;
export type { BoundingBoxFillDuotoneProps };
