import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-bold-duotone" {...props}>
      <path d="M15.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={0.4} />
        <path fill="currentColor" d="M8.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

DragHandleBoldDuotone.displayName = 'DragHandleBoldDuotone';

// Triple export pattern (lucide-react style)
export { DragHandleBoldDuotone, DragHandleBoldDuotone as DragHandleBoldDuotoneIcon, DragHandleBoldDuotone as SiDragHandleBoldDuotone };
export default DragHandleBoldDuotone;
export type { DragHandleBoldDuotoneProps };
