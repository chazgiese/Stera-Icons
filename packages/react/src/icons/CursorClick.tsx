import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorClickRegular } from './CursorClickRegular';
import { CursorClickRegularDuotone } from './CursorClickRegularDuotone';
import { CursorClickBold } from './CursorClickBold';
import { CursorClickBoldDuotone } from './CursorClickBoldDuotone';
import { CursorClickFill } from './CursorClickFill';
import { CursorClickFillDuotone } from './CursorClickFillDuotone';

export interface CursorClickProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorClick - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorClickRegular } from 'stera-icons/CursorClickRegular';
 */
const CursorClick = memo(forwardRef<SVGSVGElement, CursorClickProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorClickBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorClickBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorClickFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorClickFill ref={ref} {...rest} />;
  if (duotone) return <CursorClickRegularDuotone ref={ref} {...rest} />;
  return <CursorClickRegular ref={ref} {...rest} />;
}));

CursorClick.displayName = 'CursorClick';

// Triple export pattern (lucide-react style)
export { CursorClick, CursorClick as CursorClickIcon, CursorClick as SiCursorClick };
