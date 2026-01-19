import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DragHandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleFillDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M9 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

DragHandleFillDuotone.displayName = 'DragHandleFillDuotone';

// Triple export pattern (lucide-react style)
export { DragHandleFillDuotone, DragHandleFillDuotone as DragHandleFillDuotoneIcon, DragHandleFillDuotone as SiDragHandleFillDuotone };
export type { DragHandleFillDuotoneProps };
