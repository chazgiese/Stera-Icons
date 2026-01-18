import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletRegular } from './ListBulletRegular';
import { ListBulletRegularDuotone } from './ListBulletRegularDuotone';
import { ListBulletBold } from './ListBulletBold';
import { ListBulletBoldDuotone } from './ListBulletBoldDuotone';
import { ListBulletFill } from './ListBulletFill';
import { ListBulletFillDuotone } from './ListBulletFillDuotone';

export interface ListBulletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListBullet with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ListBulletRegular } from 'stera-icons/ListBulletRegular';
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

export { ListBullet };
