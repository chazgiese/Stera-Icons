import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SnowflakeRegular } from './SnowflakeRegular.js';
import { SnowflakeRegularDuotone } from './SnowflakeRegularDuotone.js';
import { SnowflakeBold } from './SnowflakeBold.js';
import { SnowflakeBoldDuotone } from './SnowflakeBoldDuotone.js';
import { SnowflakeFill } from './SnowflakeFill.js';
import { SnowflakeFillDuotone } from './SnowflakeFillDuotone.js';

export interface SnowflakeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Snowflake - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SnowflakeRegular } from 'stera-icons/icons/SnowflakeRegular';
 */
const Snowflake = memo(forwardRef<SVGSVGElement, SnowflakeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SnowflakeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SnowflakeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SnowflakeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SnowflakeFill ref={ref} {...rest} />;
  if (duotone) return <SnowflakeRegularDuotone ref={ref} {...rest} />;
  return <SnowflakeRegular ref={ref} {...rest} />;
}));

Snowflake.displayName = 'Snowflake';

// Triple export pattern (lucide-react style)
export { Snowflake, Snowflake as SnowflakeIcon, Snowflake as SiSnowflake };
export default Snowflake;
