import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerFieldRegular } from './SoccerFieldRegular';
import { SoccerFieldRegularDuotone } from './SoccerFieldRegularDuotone';
import { SoccerFieldBold } from './SoccerFieldBold';
import { SoccerFieldBoldDuotone } from './SoccerFieldBoldDuotone';
import { SoccerFieldFill } from './SoccerFieldFill';
import { SoccerFieldFillDuotone } from './SoccerFieldFillDuotone';

export interface SoccerFieldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SoccerField - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SoccerFieldRegular } from 'stera-icons/icons/SoccerFieldRegular';
 */
const SoccerField = memo(forwardRef<SVGSVGElement, SoccerFieldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SoccerFieldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SoccerFieldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SoccerFieldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SoccerFieldFill ref={ref} {...rest} />;
  if (duotone) return <SoccerFieldRegularDuotone ref={ref} {...rest} />;
  return <SoccerFieldRegular ref={ref} {...rest} />;
}));

SoccerField.displayName = 'SoccerField';

// Triple export pattern (lucide-react style)
export { SoccerField, SoccerField as SoccerFieldIcon, SoccerField as SiSoccerField };
