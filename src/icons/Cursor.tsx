import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorRegular } from './CursorRegular';
import { CursorRegularDuotone } from './CursorRegularDuotone';
import { CursorBold } from './CursorBold';
import { CursorBoldDuotone } from './CursorBoldDuotone';
import { CursorFill } from './CursorFill';
import { CursorFillDuotone } from './CursorFillDuotone';

export interface CursorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cursor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorRegular } from 'stera-icons/icons/CursorRegular';
 */
const Cursor = memo(forwardRef<SVGSVGElement, CursorProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorFill ref={ref} {...rest} />;
  if (duotone) return <CursorRegularDuotone ref={ref} {...rest} />;
  return <CursorRegular ref={ref} {...rest} />;
}));

Cursor.displayName = 'Cursor';

// Triple export pattern (lucide-react style)
export { Cursor, Cursor as CursorIcon, Cursor as SiCursor };
