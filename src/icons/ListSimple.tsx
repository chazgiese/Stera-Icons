import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListSimpleRegular } from './ListSimpleRegular.js';
import { ListSimpleRegularDuotone } from './ListSimpleRegularDuotone.js';
import { ListSimpleBold } from './ListSimpleBold.js';
import { ListSimpleBoldDuotone } from './ListSimpleBoldDuotone.js';
import { ListSimpleFill } from './ListSimpleFill.js';
import { ListSimpleFillDuotone } from './ListSimpleFillDuotone.js';

export interface ListSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListSimpleRegular } from 'stera-icons/icons/ListSimpleRegular';
 */
const ListSimple = memo(forwardRef<SVGSVGElement, ListSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListSimpleFill ref={ref} {...rest} />;
  if (duotone) return <ListSimpleRegularDuotone ref={ref} {...rest} />;
  return <ListSimpleRegular ref={ref} {...rest} />;
}));

ListSimple.displayName = 'ListSimple';

// Triple export pattern (lucide-react style)
export { ListSimple, ListSimple as ListSimpleIcon, ListSimple as SiListSimple };
export default ListSimple;
