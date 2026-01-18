import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Home3dRegular } from './Home3dRegular';
import { Home3dRegularDuotone } from './Home3dRegularDuotone';
import { Home3dBold } from './Home3dBold';
import { Home3dBoldDuotone } from './Home3dBoldDuotone';
import { Home3dFill } from './Home3dFill';
import { Home3dFillDuotone } from './Home3dFillDuotone';

export interface Home3dProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Home3d with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { Home3dRegular } from 'stera-icons/Home3dRegular';
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

export { Home3d };
