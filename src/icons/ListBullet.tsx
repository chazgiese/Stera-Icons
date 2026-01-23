import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListBulletRegular } from './ListBulletRegular.js';
import { ListBulletRegularDuotone } from './ListBulletRegularDuotone.js';
import { ListBulletBold } from './ListBulletBold.js';
import { ListBulletBoldDuotone } from './ListBulletBoldDuotone.js';
import { ListBulletFill } from './ListBulletFill.js';
import { ListBulletFillDuotone } from './ListBulletFillDuotone.js';

export interface ListBulletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListBullet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListBulletRegular } from 'stera-icons/icons/ListBulletRegular';
 */
const ListBullet = memo(forwardRef<SVGSVGElement, ListBulletProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListBulletBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListBulletBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListBulletFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListBulletFill ref={ref} {...rest} />;
  if (duotone) return <ListBulletRegularDuotone ref={ref} {...rest} />;
  return <ListBulletRegular ref={ref} {...rest} />;
}));

ListBullet.displayName = 'ListBullet';

// Triple export pattern (lucide-react style)
export { ListBullet, ListBullet as ListBulletIcon, ListBullet as SiListBullet };
export default ListBullet;
