import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SelectFieldRegular } from './SelectFieldRegular.js';
import { SelectFieldRegularDuotone } from './SelectFieldRegularDuotone.js';
import { SelectFieldBold } from './SelectFieldBold.js';
import { SelectFieldBoldDuotone } from './SelectFieldBoldDuotone.js';
import { SelectFieldFill } from './SelectFieldFill.js';
import { SelectFieldFillDuotone } from './SelectFieldFillDuotone.js';

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
export default SelectField;
