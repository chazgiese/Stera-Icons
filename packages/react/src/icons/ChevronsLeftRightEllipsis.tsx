import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsLeftRightEllipsisRegular } from './ChevronsLeftRightEllipsisRegular';
import { ChevronsLeftRightEllipsisRegularDuotone } from './ChevronsLeftRightEllipsisRegularDuotone';
import { ChevronsLeftRightEllipsisBold } from './ChevronsLeftRightEllipsisBold';
import { ChevronsLeftRightEllipsisBoldDuotone } from './ChevronsLeftRightEllipsisBoldDuotone';
import { ChevronsLeftRightEllipsisFill } from './ChevronsLeftRightEllipsisFill';
import { ChevronsLeftRightEllipsisFillDuotone } from './ChevronsLeftRightEllipsisFillDuotone';

export interface ChevronsLeftRightEllipsisProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsLeftRightEllipsis with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsLeftRightEllipsisRegular } from 'stera-icons/ChevronsLeftRightEllipsisRegular';
 */
const ChevronsLeftRightEllipsis = memo(forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftRightEllipsisBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsLeftRightEllipsisBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftRightEllipsisFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsLeftRightEllipsisFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsLeftRightEllipsisRegularDuotone ref={ref} {...rest} />;
  return <ChevronsLeftRightEllipsisRegular ref={ref} {...rest} />;
}));

ChevronsLeftRightEllipsis.displayName = 'ChevronsLeftRightEllipsis';

export { ChevronsLeftRightEllipsis };
