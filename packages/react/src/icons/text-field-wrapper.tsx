import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextFieldIcon as RegularTextFieldIcon } from './text-field';
import { TextFieldIconDuotone as TextFieldIconDuotone } from './text-field-duotone';
import { TextFieldIconBold as TextFieldIconBold } from './text-field-bold';
import { TextFieldIconBoldDuotone as TextFieldIconBoldDuotone } from './text-field-bold-duotone';
import { TextFieldIconFill as TextFieldIconFill } from './text-field-fill';
import { TextFieldIconFillDuotone as TextFieldIconFillDuotone } from './text-field-fill-duotone';

export interface TextFieldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextFieldIcon = memo(forwardRef<SVGSVGElement, TextFieldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextFieldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextFieldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextFieldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextFieldIconFill ref={ref} {...props} />;
  if (duotone) return <TextFieldIconDuotone ref={ref} {...props} />;
  return <RegularTextFieldIcon ref={ref} {...props} />;
}));

TextFieldIcon.displayName = 'TextFieldIcon';

export { TextFieldIcon };
