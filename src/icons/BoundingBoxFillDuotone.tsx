import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-fill-duotone" {...props}>
      <path d="M15 19H9v-2h6zM19 15h-2V9h2zM7 15H5V9h2zM15 7H9V5h6z" opacity={0.4} />
        <path fill="currentColor" d="M8 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM20 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM8 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

BoundingBoxFillDuotone.displayName = 'BoundingBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxFillDuotone, BoundingBoxFillDuotone as BoundingBoxFillDuotoneIcon, BoundingBoxFillDuotone as SiBoundingBoxFillDuotone };
export default BoundingBoxFillDuotone;
export type { BoundingBoxFillDuotoneProps };
