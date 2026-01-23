import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Home3dRegular } from './Home3dRegular.js';
import { Home3dRegularDuotone } from './Home3dRegularDuotone.js';
import { Home3dBold } from './Home3dBold.js';
import { Home3dBoldDuotone } from './Home3dBoldDuotone.js';
import { Home3dFill } from './Home3dFill.js';
import { Home3dFillDuotone } from './Home3dFillDuotone.js';

export interface Home3dProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Home3d - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Home3dRegular } from 'stera-icons/icons/Home3dRegular';
 */
const Home3d = memo(forwardRef<SVGSVGElement, Home3dProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Home3dBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Home3dBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Home3dFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Home3dFill ref={ref} {...rest} />;
  if (duotone) return <Home3dRegularDuotone ref={ref} {...rest} />;
  return <Home3dRegular ref={ref} {...rest} />;
}));

Home3d.displayName = 'Home3d';

// Triple export pattern (lucide-react style)
export { Home3d, Home3d as Home3dIcon, Home3d as SiHome3d };
export default Home3d;
