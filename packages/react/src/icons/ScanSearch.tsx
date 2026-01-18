import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanSearchRegular } from './ScanSearchRegular';
import { ScanSearchRegularDuotone } from './ScanSearchRegularDuotone';
import { ScanSearchBold } from './ScanSearchBold';
import { ScanSearchBoldDuotone } from './ScanSearchBoldDuotone';
import { ScanSearchFill } from './ScanSearchFill';
import { ScanSearchFillDuotone } from './ScanSearchFillDuotone';

export interface ScanSearchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanSearch with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanSearchRegular } from 'stera-icons/ScanSearchRegular';
 */
const ScanSearch = memo(forwardRef<SVGSVGElement, ScanSearchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanSearchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanSearchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanSearchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanSearchFill ref={ref} {...rest} />;
  if (duotone) return <ScanSearchRegularDuotone ref={ref} {...rest} />;
  return <ScanSearchRegular ref={ref} {...rest} />;
}));

ScanSearch.displayName = 'ScanSearch';

export { ScanSearch };
