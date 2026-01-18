import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListMinusRegular } from './ListMinusRegular';
import { ListMinusRegularDuotone } from './ListMinusRegularDuotone';
import { ListMinusBold } from './ListMinusBold';
import { ListMinusBoldDuotone } from './ListMinusBoldDuotone';
import { ListMinusFill } from './ListMinusFill';
import { ListMinusFillDuotone } from './ListMinusFillDuotone';

export interface ListMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListMinus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListMinusRegular } from 'stera-icons/ListMinusRegular';
 */
const ListMinus = memo(forwardRef<SVGSVGElement, ListMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListMinusFill ref={ref} {...rest} />;
  if (duotone) return <ListMinusRegularDuotone ref={ref} {...rest} />;
  return <ListMinusRegular ref={ref} {...rest} />;
}));

ListMinus.displayName = 'ListMinus';

export { ListMinus };
