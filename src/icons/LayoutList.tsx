import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutListRegular } from './LayoutListRegular.js';
import { LayoutListRegularDuotone } from './LayoutListRegularDuotone.js';
import { LayoutListBold } from './LayoutListBold.js';
import { LayoutListBoldDuotone } from './LayoutListBoldDuotone.js';
import { LayoutListFill } from './LayoutListFill.js';
import { LayoutListFillDuotone } from './LayoutListFillDuotone.js';

export interface LayoutListProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutList - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutListRegular } from 'stera-icons/icons/LayoutListRegular';
 */
const LayoutList = memo(forwardRef<SVGSVGElement, LayoutListProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutListBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutListBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutListFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutListFill ref={ref} {...rest} />;
  if (duotone) return <LayoutListRegularDuotone ref={ref} {...rest} />;
  return <LayoutListRegular ref={ref} {...rest} />;
}));

LayoutList.displayName = 'LayoutList';

// Triple export pattern (lucide-react style)
export { LayoutList, LayoutList as LayoutListIcon, LayoutList as SiLayoutList };
export default LayoutList;
