import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleFillProps = Omit<IconBaseProps, 'children'>;

const DragHandleFill = memo(
  forwardRef<SVGSVGElement, DragHandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

DragHandleFill.displayName = 'DragHandleFill';

// Triple export pattern (lucide-react style)
export { DragHandleFill, DragHandleFill as DragHandleFillIcon, DragHandleFill as SiDragHandleFill };
export default DragHandleFill;
export type { DragHandleFillProps };
