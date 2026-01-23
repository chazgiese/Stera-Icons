import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CliRegular } from './CliRegular.js';
import { CliRegularDuotone } from './CliRegularDuotone.js';
import { CliBold } from './CliBold.js';
import { CliBoldDuotone } from './CliBoldDuotone.js';
import { CliFill } from './CliFill.js';
import { CliFillDuotone } from './CliFillDuotone.js';

export interface CliProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cli - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CliRegular } from 'stera-icons/icons/CliRegular';
 */
const Cli = memo(forwardRef<SVGSVGElement, CliProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CliBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CliFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CliFill ref={ref} {...rest} />;
  if (duotone) return <CliRegularDuotone ref={ref} {...rest} />;
  return <CliRegular ref={ref} {...rest} />;
}));

Cli.displayName = 'Cli';

// Triple export pattern (lucide-react style)
export { Cli, Cli as CliIcon, Cli as SiCli };
export default Cli;
