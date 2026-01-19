import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextAltRegular } from './CursorTextAltRegular';
import { CursorTextAltRegularDuotone } from './CursorTextAltRegularDuotone';
import { CursorTextAltBold } from './CursorTextAltBold';
import { CursorTextAltBoldDuotone } from './CursorTextAltBoldDuotone';
import { CursorTextAltFill } from './CursorTextAltFill';
import { CursorTextAltFillDuotone } from './CursorTextAltFillDuotone';

export interface CursorTextAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorTextAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorTextAltRegular } from 'stera-icons/icons/CursorTextAltRegular';
 */
const CursorTextAlt = memo(forwardRef<SVGSVGElement, CursorTextAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorTextAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorTextAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorTextAltFill ref={ref} {...rest} />;
  if (duotone) return <CursorTextAltRegularDuotone ref={ref} {...rest} />;
  return <CursorTextAltRegular ref={ref} {...rest} />;
}));

CursorTextAlt.displayName = 'CursorTextAlt';

// Triple export pattern (lucide-react style)
export { CursorTextAlt, CursorTextAlt as CursorTextAltIcon, CursorTextAlt as SiCursorTextAlt };
