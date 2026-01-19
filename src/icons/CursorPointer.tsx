import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorPointerRegular } from './CursorPointerRegular';
import { CursorPointerRegularDuotone } from './CursorPointerRegularDuotone';
import { CursorPointerBold } from './CursorPointerBold';
import { CursorPointerBoldDuotone } from './CursorPointerBoldDuotone';
import { CursorPointerFill } from './CursorPointerFill';
import { CursorPointerFillDuotone } from './CursorPointerFillDuotone';

export interface CursorPointerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorPointer - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorPointerRegular } from 'stera-icons/icons/CursorPointerRegular';
 */
const CursorPointer = memo(forwardRef<SVGSVGElement, CursorPointerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorPointerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorPointerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorPointerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorPointerFill ref={ref} {...rest} />;
  if (duotone) return <CursorPointerRegularDuotone ref={ref} {...rest} />;
  return <CursorPointerRegular ref={ref} {...rest} />;
}));

CursorPointer.displayName = 'CursorPointer';

// Triple export pattern (lucide-react style)
export { CursorPointer, CursorPointer as CursorPointerIcon, CursorPointer as SiCursorPointer };
export default CursorPointer;
