import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DragHandleBoldProps = Omit<IconBaseProps, 'children'>;

const DragHandleBold = memo(
  forwardRef<SVGSVGElement, DragHandleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-bold" {...props}>
      <path fill="currentColor" d="M8.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

DragHandleBold.displayName = 'DragHandleBold';

// Triple export pattern (lucide-react style)
export { DragHandleBold, DragHandleBold as DragHandleBoldIcon, DragHandleBold as SiDragHandleBold };
export type { DragHandleBoldProps };
