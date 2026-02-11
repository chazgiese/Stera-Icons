import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleRegularProps = Omit<IconBaseProps, 'children'>;

const DragHandleRegular = memo(
  forwardRef<SVGSVGElement, DragHandleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle" {...props}>
      <path d="M8.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

DragHandleRegular.displayName = 'DragHandleRegular';

// Triple export pattern (lucide-react style)
export { DragHandleRegular, DragHandleRegular as DragHandleRegularIcon, DragHandleRegular as SiDragHandleRegular };
export default DragHandleRegular;
export type { DragHandleRegularProps };
