import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DragHandleIcon as DragHandleIconRegular } from './drag-handle';
import { DragHandleIconBold } from './drag-handle-bold';
import { DragHandleIconFilled } from './drag-handle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DragHandleIconProps extends IconProps {
  variant?: IconVariant;
}

const DragHandleIcon = memo(forwardRef<SVGSVGElement, DragHandleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DragHandleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DragHandleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DragHandleIconRegular ref={ref} {...props} />;
  }
}));

DragHandleIcon.displayName = 'DragHandleIcon';

export { DragHandleIcon };
