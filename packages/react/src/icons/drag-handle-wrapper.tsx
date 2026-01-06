import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DragHandleIcon as RegularDragHandleIcon } from './drag-handle';
import { DragHandleIconDuotone as DragHandleIconDuotone } from './drag-handle-duotone';
import { DragHandleIconBold as DragHandleIconBold } from './drag-handle-bold';
import { DragHandleIconBoldDuotone as DragHandleIconBoldDuotone } from './drag-handle-bold-duotone';
import { DragHandleIconFill as DragHandleIconFill } from './drag-handle-fill';
import { DragHandleIconFillDuotone as DragHandleIconFillDuotone } from './drag-handle-fill-duotone';

export interface DragHandleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DragHandleIcon = memo(forwardRef<SVGSVGElement, DragHandleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DragHandleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DragHandleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DragHandleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DragHandleIconFill ref={ref} {...props} />;
  if (duotone) return <DragHandleIconDuotone ref={ref} {...props} />;
  return <RegularDragHandleIcon ref={ref} {...props} />;
}));

DragHandleIcon.displayName = 'DragHandleIcon';

export { DragHandleIcon };
