import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListRegular } from './ListRegular';
import { ListRegularDuotone } from './ListRegularDuotone';
import { ListBold } from './ListBold';
import { ListBoldDuotone } from './ListBoldDuotone';
import { ListFill } from './ListFill';
import { ListFillDuotone } from './ListFillDuotone';

export interface ListProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * List - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListRegular } from 'stera-icons/icons/ListRegular';
 */
const List = memo(forwardRef<SVGSVGElement, ListProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListFill ref={ref} {...rest} />;
  if (duotone) return <ListRegularDuotone ref={ref} {...rest} />;
  return <ListRegular ref={ref} {...rest} />;
}));

List.displayName = 'List';

// Triple export pattern (lucide-react style)
export { List, List as ListIcon, List as SiList };
