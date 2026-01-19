import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListSimpleRegular } from './ListSimpleRegular';
import { ListSimpleRegularDuotone } from './ListSimpleRegularDuotone';
import { ListSimpleBold } from './ListSimpleBold';
import { ListSimpleBoldDuotone } from './ListSimpleBoldDuotone';
import { ListSimpleFill } from './ListSimpleFill';
import { ListSimpleFillDuotone } from './ListSimpleFillDuotone';

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
