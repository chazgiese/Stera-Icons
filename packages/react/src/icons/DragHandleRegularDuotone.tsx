import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DragHandleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleRegularDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" opacity={0.4} />
        <path fill="currentColor" d="M10 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

DragHandleRegularDuotone.displayName = 'DragHandleRegularDuotone';

// Triple export pattern (lucide-react style)
export { DragHandleRegularDuotone, DragHandleRegularDuotone as DragHandleRegularDuotoneIcon, DragHandleRegularDuotone as SiDragHandleRegularDuotone };
export type { DragHandleRegularDuotoneProps };
