import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignLeftIcon as RegularTextAlignLeftIcon } from './text-align-left';
import { TextAlignLeftIconDuotone as TextAlignLeftIconDuotone } from './text-align-left-duotone';
import { TextAlignLeftIconBold as TextAlignLeftIconBold } from './text-align-left-bold';
import { TextAlignLeftIconBoldDuotone as TextAlignLeftIconBoldDuotone } from './text-align-left-bold-duotone';
import { TextAlignLeftIconFill as TextAlignLeftIconFill } from './text-align-left-fill';
import { TextAlignLeftIconFillDuotone as TextAlignLeftIconFillDuotone } from './text-align-left-fill-duotone';

export interface TextAlignLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextAlignLeftIcon = memo(forwardRef<SVGSVGElement, TextAlignLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextAlignLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextAlignLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextAlignLeftIconFill ref={ref} {...props} />;
  if (duotone) return <TextAlignLeftIconDuotone ref={ref} {...props} />;
  return <RegularTextAlignLeftIcon ref={ref} {...props} />;
}));

TextAlignLeftIcon.displayName = 'TextAlignLeftIcon';

export { TextAlignLeftIcon };
