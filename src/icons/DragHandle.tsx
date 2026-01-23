import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DragHandleRegular } from './DragHandleRegular.js';
import { DragHandleRegularDuotone } from './DragHandleRegularDuotone.js';
import { DragHandleBold } from './DragHandleBold.js';
import { DragHandleBoldDuotone } from './DragHandleBoldDuotone.js';
import { DragHandleFill } from './DragHandleFill.js';
import { DragHandleFillDuotone } from './DragHandleFillDuotone.js';

export interface DragHandleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DragHandle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DragHandleRegular } from 'stera-icons/icons/DragHandleRegular';
 */
const DragHandle = memo(forwardRef<SVGSVGElement, DragHandleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DragHandleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DragHandleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DragHandleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DragHandleFill ref={ref} {...rest} />;
  if (duotone) return <DragHandleRegularDuotone ref={ref} {...rest} />;
  return <DragHandleRegular ref={ref} {...rest} />;
}));

DragHandle.displayName = 'DragHandle';

// Triple export pattern (lucide-react style)
export { DragHandle, DragHandle as DragHandleIcon, DragHandle as SiDragHandle };
export default DragHandle;
