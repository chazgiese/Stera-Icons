import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletSimpleRegular } from './ListBulletSimpleRegular';
import { ListBulletSimpleRegularDuotone } from './ListBulletSimpleRegularDuotone';
import { ListBulletSimpleBold } from './ListBulletSimpleBold';
import { ListBulletSimpleBoldDuotone } from './ListBulletSimpleBoldDuotone';
import { ListBulletSimpleFill } from './ListBulletSimpleFill';
import { ListBulletSimpleFillDuotone } from './ListBulletSimpleFillDuotone';

export interface ListBulletSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListBulletSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListBulletSimpleRegular } from 'stera-icons/icons/ListBulletSimpleRegular';
 */
const ListBulletSimple = memo(forwardRef<SVGSVGElement, ListBulletSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListBulletSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListBulletSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListBulletSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListBulletSimpleFill ref={ref} {...rest} />;
  if (duotone) return <ListBulletSimpleRegularDuotone ref={ref} {...rest} />;
  return <ListBulletSimpleRegular ref={ref} {...rest} />;
}));

ListBulletSimple.displayName = 'ListBulletSimple';

// Triple export pattern (lucide-react style)
export { ListBulletSimple, ListBulletSimple as ListBulletSimpleIcon, ListBulletSimple as SiListBulletSimple };
