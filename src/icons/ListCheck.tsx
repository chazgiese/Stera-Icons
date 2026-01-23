import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListCheckRegular } from './ListCheckRegular.js';
import { ListCheckRegularDuotone } from './ListCheckRegularDuotone.js';
import { ListCheckBold } from './ListCheckBold.js';
import { ListCheckBoldDuotone } from './ListCheckBoldDuotone.js';
import { ListCheckFill } from './ListCheckFill.js';
import { ListCheckFillDuotone } from './ListCheckFillDuotone.js';

export interface ListCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListCheckRegular } from 'stera-icons/icons/ListCheckRegular';
 */
const ListCheck = memo(forwardRef<SVGSVGElement, ListCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListCheckFill ref={ref} {...rest} />;
  if (duotone) return <ListCheckRegularDuotone ref={ref} {...rest} />;
  return <ListCheckRegular ref={ref} {...rest} />;
}));

ListCheck.displayName = 'ListCheck';

// Triple export pattern (lucide-react style)
export { ListCheck, ListCheck as ListCheckIcon, ListCheck as SiListCheck };
export default ListCheck;
