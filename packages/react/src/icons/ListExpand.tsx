import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListExpandRegular } from './ListExpandRegular';
import { ListExpandRegularDuotone } from './ListExpandRegularDuotone';
import { ListExpandBold } from './ListExpandBold';
import { ListExpandBoldDuotone } from './ListExpandBoldDuotone';
import { ListExpandFill } from './ListExpandFill';
import { ListExpandFillDuotone } from './ListExpandFillDuotone';

export interface ListExpandProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListExpand with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListExpandRegular } from 'stera-icons/ListExpandRegular';
 */
const ListExpand = memo(forwardRef<SVGSVGElement, ListExpandProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListExpandBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListExpandBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListExpandFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListExpandFill ref={ref} {...rest} />;
  if (duotone) return <ListExpandRegularDuotone ref={ref} {...rest} />;
  return <ListExpandRegular ref={ref} {...rest} />;
}));

ListExpand.displayName = 'ListExpand';

export { ListExpand };
