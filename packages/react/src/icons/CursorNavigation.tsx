import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorNavigationRegular } from './CursorNavigationRegular';
import { CursorNavigationRegularDuotone } from './CursorNavigationRegularDuotone';
import { CursorNavigationBold } from './CursorNavigationBold';
import { CursorNavigationBoldDuotone } from './CursorNavigationBoldDuotone';
import { CursorNavigationFill } from './CursorNavigationFill';
import { CursorNavigationFillDuotone } from './CursorNavigationFillDuotone';

export interface CursorNavigationProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorNavigation - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorNavigationRegular } from 'stera-icons/CursorNavigationRegular';
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
