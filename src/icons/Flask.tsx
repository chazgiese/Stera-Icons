import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlaskRegular } from './FlaskRegular.js';
import { FlaskRegularDuotone } from './FlaskRegularDuotone.js';
import { FlaskBold } from './FlaskBold.js';
import { FlaskBoldDuotone } from './FlaskBoldDuotone.js';
import { FlaskFill } from './FlaskFill.js';
import { FlaskFillDuotone } from './FlaskFillDuotone.js';

export interface FlaskProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flask - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlaskRegular } from 'stera-icons/icons/FlaskRegular';
 */
const Flask = memo(forwardRef<SVGSVGElement, FlaskProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlaskBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlaskBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlaskFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlaskFill ref={ref} {...rest} />;
  if (duotone) return <FlaskRegularDuotone ref={ref} {...rest} />;
  return <FlaskRegular ref={ref} {...rest} />;
}));

Flask.displayName = 'Flask';

// Triple export pattern (lucide-react style)
export { Flask, Flask as FlaskIcon, Flask as SiFlask };
export default Flask;
