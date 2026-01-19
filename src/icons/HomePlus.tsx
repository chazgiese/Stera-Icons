import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomePlusRegular } from './HomePlusRegular';
import { HomePlusRegularDuotone } from './HomePlusRegularDuotone';
import { HomePlusBold } from './HomePlusBold';
import { HomePlusBoldDuotone } from './HomePlusBoldDuotone';
import { HomePlusFill } from './HomePlusFill';
import { HomePlusFillDuotone } from './HomePlusFillDuotone';

export interface HomePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HomePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HomePlusRegular } from 'stera-icons/icons/HomePlusRegular';
 */
const HomePlus = memo(forwardRef<SVGSVGElement, HomePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HomePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HomePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HomePlusFill ref={ref} {...rest} />;
  if (duotone) return <HomePlusRegularDuotone ref={ref} {...rest} />;
  return <HomePlusRegular ref={ref} {...rest} />;
}));

HomePlus.displayName = 'HomePlus';

// Triple export pattern (lucide-react style)
export { HomePlus, HomePlus as HomePlusIcon, HomePlus as SiHomePlus };
