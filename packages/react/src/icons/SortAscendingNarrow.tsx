import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortAscendingNarrowRegular } from './SortAscendingNarrowRegular';
import { SortAscendingNarrowRegularDuotone } from './SortAscendingNarrowRegularDuotone';
import { SortAscendingNarrowBold } from './SortAscendingNarrowBold';
import { SortAscendingNarrowBoldDuotone } from './SortAscendingNarrowBoldDuotone';
import { SortAscendingNarrowFill } from './SortAscendingNarrowFill';
import { SortAscendingNarrowFillDuotone } from './SortAscendingNarrowFillDuotone';

export interface SortAscendingNarrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SortAscendingNarrow with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SortAscendingNarrowRegular } from 'stera-icons/SortAscendingNarrowRegular';
 */
const SortAscendingNarrow = memo(forwardRef<SVGSVGElement, SortAscendingNarrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortAscendingNarrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SortAscendingNarrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SortAscendingNarrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SortAscendingNarrowFill ref={ref} {...rest} />;
  if (duotone) return <SortAscendingNarrowRegularDuotone ref={ref} {...rest} />;
  return <SortAscendingNarrowRegular ref={ref} {...rest} />;
}));

SortAscendingNarrow.displayName = 'SortAscendingNarrow';

export { SortAscendingNarrow };
