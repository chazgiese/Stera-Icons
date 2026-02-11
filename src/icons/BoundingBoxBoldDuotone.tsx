import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-bold-duotone" {...props}>
      <path d="M15 19H9v-2h6zM19 15h-2V9h2zM7 15H5V9h2zM15 7H9V5h6z" opacity={0.4} />
        <path fillRule="evenodd" d="M8 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2H5zM20 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2h-2zM8 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 7h2V5H5zM20 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 4h2V5h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxBoldDuotone.displayName = 'BoundingBoxBoldDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxBoldDuotone, BoundingBoxBoldDuotone as BoundingBoxBoldDuotoneIcon, BoundingBoxBoldDuotone as SiBoundingBoxBoldDuotone };
export default BoundingBoxBoldDuotone;
export type { BoundingBoxBoldDuotoneProps };
