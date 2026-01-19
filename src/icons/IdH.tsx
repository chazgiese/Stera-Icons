import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdHRegular } from './IdHRegular';
import { IdHRegularDuotone } from './IdHRegularDuotone';
import { IdHBold } from './IdHBold';
import { IdHBoldDuotone } from './IdHBoldDuotone';
import { IdHFill } from './IdHFill';
import { IdHFillDuotone } from './IdHFillDuotone';

export interface IdHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * IdH - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { IdHRegular } from 'stera-icons/icons/IdHRegular';
 */
const IdH = memo(forwardRef<SVGSVGElement, IdHProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <IdHBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <IdHBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <IdHFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <IdHFill ref={ref} {...rest} />;
  if (duotone) return <IdHRegularDuotone ref={ref} {...rest} />;
  return <IdHRegular ref={ref} {...rest} />;
}));

IdH.displayName = 'IdH';

// Triple export pattern (lucide-react style)
export { IdH, IdH as IdHIcon, IdH as SiIdH };
