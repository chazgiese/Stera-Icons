import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckRegular } from './ListCheckRegular';
import { ListCheckRegularDuotone } from './ListCheckRegularDuotone';
import { ListCheckBold } from './ListCheckBold';
import { ListCheckBoldDuotone } from './ListCheckBoldDuotone';
import { ListCheckFill } from './ListCheckFill';
import { ListCheckFillDuotone } from './ListCheckFillDuotone';

export interface ListCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListCheck with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListCheckRegular } from 'stera-icons/ListCheckRegular';
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

export { ListCheck };
