import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortRegular } from './SortRegular';
import { SortRegularDuotone } from './SortRegularDuotone';
import { SortBold } from './SortBold';
import { SortBoldDuotone } from './SortBoldDuotone';
import { SortFill } from './SortFill';
import { SortFillDuotone } from './SortFillDuotone';

export interface SortProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sort with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SortRegular } from 'stera-icons/SortRegular';
 */
const Sort = memo(forwardRef<SVGSVGElement, SortProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SortBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SortFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SortFill ref={ref} {...rest} />;
  if (duotone) return <SortRegularDuotone ref={ref} {...rest} />;
  return <SortRegular ref={ref} {...rest} />;
}));

Sort.displayName = 'Sort';

export { Sort };
