import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextIcon as RegularTextIcon } from './text';
import { TextIconDuotone as TextIconDuotone } from './text-duotone';
import { TextIconBold as TextIconBold } from './text-bold';
import { TextIconBoldDuotone as TextIconBoldDuotone } from './text-bold-duotone';
import { TextIconFill as TextIconFill } from './text-fill';
import { TextIconFillDuotone as TextIconFillDuotone } from './text-fill-duotone';

export interface TextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextIcon = memo(forwardRef<SVGSVGElement, TextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextIconFill ref={ref} {...props} />;
  if (duotone) return <TextIconDuotone ref={ref} {...props} />;
  return <RegularTextIcon ref={ref} {...props} />;
}));

TextIcon.displayName = 'TextIcon';

export { TextIcon };
