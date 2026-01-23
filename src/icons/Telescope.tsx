import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TelescopeRegular } from './TelescopeRegular.js';
import { TelescopeRegularDuotone } from './TelescopeRegularDuotone.js';
import { TelescopeBold } from './TelescopeBold.js';
import { TelescopeBoldDuotone } from './TelescopeBoldDuotone.js';
import { TelescopeFill } from './TelescopeFill.js';
import { TelescopeFillDuotone } from './TelescopeFillDuotone.js';

export interface TelescopeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Telescope - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TelescopeRegular } from 'stera-icons/icons/TelescopeRegular';
 */
const Telescope = memo(forwardRef<SVGSVGElement, TelescopeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TelescopeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TelescopeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TelescopeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TelescopeFill ref={ref} {...rest} />;
  if (duotone) return <TelescopeRegularDuotone ref={ref} {...rest} />;
  return <TelescopeRegular ref={ref} {...rest} />;
}));

Telescope.displayName = 'Telescope';

// Triple export pattern (lucide-react style)
export { Telescope, Telescope as TelescopeIcon, Telescope as SiTelescope };
export default Telescope;
