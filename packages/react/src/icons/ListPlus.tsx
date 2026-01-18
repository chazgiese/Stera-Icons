import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListPlusRegular } from './ListPlusRegular';
import { ListPlusRegularDuotone } from './ListPlusRegularDuotone';
import { ListPlusBold } from './ListPlusBold';
import { ListPlusBoldDuotone } from './ListPlusBoldDuotone';
import { ListPlusFill } from './ListPlusFill';
import { ListPlusFillDuotone } from './ListPlusFillDuotone';

export interface ListPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListPlus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListPlusRegular } from 'stera-icons/ListPlusRegular';
 */
const ListPlus = memo(forwardRef<SVGSVGElement, ListPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListPlusFill ref={ref} {...rest} />;
  if (duotone) return <ListPlusRegularDuotone ref={ref} {...rest} />;
  return <ListPlusRegular ref={ref} {...rest} />;
}));

ListPlus.displayName = 'ListPlus';

export { ListPlus };
