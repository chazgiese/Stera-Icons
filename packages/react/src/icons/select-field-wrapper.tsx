import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SelectFieldIcon as RegularSelectFieldIcon } from './select-field';
import { SelectFieldIconDuotone as SelectFieldIconDuotone } from './select-field-duotone';
import { SelectFieldIconBold as SelectFieldIconBold } from './select-field-bold';
import { SelectFieldIconBoldDuotone as SelectFieldIconBoldDuotone } from './select-field-bold-duotone';
import { SelectFieldIconFill as SelectFieldIconFill } from './select-field-fill';
import { SelectFieldIconFillDuotone as SelectFieldIconFillDuotone } from './select-field-fill-duotone';

export interface SelectFieldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SelectFieldIcon = memo(forwardRef<SVGSVGElement, SelectFieldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SelectFieldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SelectFieldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SelectFieldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SelectFieldIconFill ref={ref} {...props} />;
  if (duotone) return <SelectFieldIconDuotone ref={ref} {...props} />;
  return <RegularSelectFieldIcon ref={ref} {...props} />;
}));

SelectFieldIcon.displayName = 'SelectFieldIcon';

export { SelectFieldIcon };
