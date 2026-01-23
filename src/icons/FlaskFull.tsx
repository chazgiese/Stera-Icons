import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlaskFullRegular } from './FlaskFullRegular.js';
import { FlaskFullRegularDuotone } from './FlaskFullRegularDuotone.js';
import { FlaskFullBold } from './FlaskFullBold.js';
import { FlaskFullBoldDuotone } from './FlaskFullBoldDuotone.js';
import { FlaskFullFill } from './FlaskFullFill.js';
import { FlaskFullFillDuotone } from './FlaskFullFillDuotone.js';

export interface FlaskFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlaskFull - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlaskFullRegular } from 'stera-icons/icons/FlaskFullRegular';
 */
const FlaskFull = memo(forwardRef<SVGSVGElement, FlaskFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlaskFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlaskFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlaskFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlaskFullFill ref={ref} {...rest} />;
  if (duotone) return <FlaskFullRegularDuotone ref={ref} {...rest} />;
  return <FlaskFullRegular ref={ref} {...rest} />;
}));

FlaskFull.displayName = 'FlaskFull';

// Triple export pattern (lucide-react style)
export { FlaskFull, FlaskFull as FlaskFullIcon, FlaskFull as SiFlaskFull };
export default FlaskFull;
