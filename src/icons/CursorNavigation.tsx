import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorNavigationRegular } from './CursorNavigationRegular.js';
import { CursorNavigationRegularDuotone } from './CursorNavigationRegularDuotone.js';
import { CursorNavigationBold } from './CursorNavigationBold.js';
import { CursorNavigationBoldDuotone } from './CursorNavigationBoldDuotone.js';
import { CursorNavigationFill } from './CursorNavigationFill.js';
import { CursorNavigationFillDuotone } from './CursorNavigationFillDuotone.js';

export interface CursorNavigationProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorNavigation - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorNavigationRegular } from 'stera-icons/icons/CursorNavigationRegular';
 */
const CursorNavigation = memo(forwardRef<SVGSVGElement, CursorNavigationProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorNavigationBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorNavigationBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorNavigationFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorNavigationFill ref={ref} {...rest} />;
  if (duotone) return <CursorNavigationRegularDuotone ref={ref} {...rest} />;
  return <CursorNavigationRegular ref={ref} {...rest} />;
}));

CursorNavigation.displayName = 'CursorNavigation';

// Triple export pattern (lucide-react style)
export { CursorNavigation, CursorNavigation as CursorNavigationIcon, CursorNavigation as SiCursorNavigation };
export default CursorNavigation;
