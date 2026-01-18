import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsLeftRegular } from './ChevronsLeftRegular';
import { ChevronsLeftRegularDuotone } from './ChevronsLeftRegularDuotone';
import { ChevronsLeftBold } from './ChevronsLeftBold';
import { ChevronsLeftBoldDuotone } from './ChevronsLeftBoldDuotone';
import { ChevronsLeftFill } from './ChevronsLeftFill';
import { ChevronsLeftFillDuotone } from './ChevronsLeftFillDuotone';

export interface ChevronsLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsLeftRegular } from 'stera-icons/ChevronsLeftRegular';
 */
const ChevronsLeft = memo(forwardRef<SVGSVGElement, ChevronsLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronsLeftRegular ref={ref} {...rest} />;
}));

ChevronsLeft.displayName = 'ChevronsLeft';

export { ChevronsLeft };
