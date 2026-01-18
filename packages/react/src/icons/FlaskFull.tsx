import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskFullRegular } from './FlaskFullRegular';
import { FlaskFullRegularDuotone } from './FlaskFullRegularDuotone';
import { FlaskFullBold } from './FlaskFullBold';
import { FlaskFullBoldDuotone } from './FlaskFullBoldDuotone';
import { FlaskFullFill } from './FlaskFullFill';
import { FlaskFullFillDuotone } from './FlaskFullFillDuotone';

export interface FlaskFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlaskFull - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlaskFullRegular } from 'stera-icons/FlaskFullRegular';
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
