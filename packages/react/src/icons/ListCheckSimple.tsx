import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckSimpleRegular } from './ListCheckSimpleRegular';
import { ListCheckSimpleRegularDuotone } from './ListCheckSimpleRegularDuotone';
import { ListCheckSimpleBold } from './ListCheckSimpleBold';
import { ListCheckSimpleBoldDuotone } from './ListCheckSimpleBoldDuotone';
import { ListCheckSimpleFill } from './ListCheckSimpleFill';
import { ListCheckSimpleFillDuotone } from './ListCheckSimpleFillDuotone';

export interface ListCheckSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListCheckSimple with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListCheckSimpleRegular } from 'stera-icons/ListCheckSimpleRegular';
 */
const ListCheckSimple = memo(forwardRef<SVGSVGElement, ListCheckSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListCheckSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListCheckSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListCheckSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListCheckSimpleFill ref={ref} {...rest} />;
  if (duotone) return <ListCheckSimpleRegularDuotone ref={ref} {...rest} />;
  return <ListCheckSimpleRegular ref={ref} {...rest} />;
}));

ListCheckSimple.displayName = 'ListCheckSimple';

export { ListCheckSimple };
