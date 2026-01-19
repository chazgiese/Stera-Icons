import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextFieldRegular } from './TextFieldRegular';
import { TextFieldRegularDuotone } from './TextFieldRegularDuotone';
import { TextFieldBold } from './TextFieldBold';
import { TextFieldBoldDuotone } from './TextFieldBoldDuotone';
import { TextFieldFill } from './TextFieldFill';
import { TextFieldFillDuotone } from './TextFieldFillDuotone';

export interface TextFieldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextField - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextFieldRegular } from 'stera-icons/icons/TextFieldRegular';
 */
const TextField = memo(forwardRef<SVGSVGElement, TextFieldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextFieldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextFieldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextFieldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextFieldFill ref={ref} {...rest} />;
  if (duotone) return <TextFieldRegularDuotone ref={ref} {...rest} />;
  return <TextFieldRegular ref={ref} {...rest} />;
}));

TextField.displayName = 'TextField';

// Triple export pattern (lucide-react style)
export { TextField, TextField as TextFieldIcon, TextField as SiTextField };
export default TextField;
