import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SelectFieldRegular } from './SelectFieldRegular';
import { SelectFieldRegularDuotone } from './SelectFieldRegularDuotone';
import { SelectFieldBold } from './SelectFieldBold';
import { SelectFieldBoldDuotone } from './SelectFieldBoldDuotone';
import { SelectFieldFill } from './SelectFieldFill';
import { SelectFieldFillDuotone } from './SelectFieldFillDuotone';

export interface SelectFieldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SelectField - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SelectFieldRegular } from 'stera-icons/icons/SelectFieldRegular';
 */
const SelectField = memo(forwardRef<SVGSVGElement, SelectFieldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SelectFieldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SelectFieldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SelectFieldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SelectFieldFill ref={ref} {...rest} />;
  if (duotone) return <SelectFieldRegularDuotone ref={ref} {...rest} />;
  return <SelectFieldRegular ref={ref} {...rest} />;
}));

SelectField.displayName = 'SelectField';

// Triple export pattern (lucide-react style)
export { SelectField, SelectField as SelectFieldIcon, SelectField as SiSelectField };
