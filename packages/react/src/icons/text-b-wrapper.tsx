import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextBIcon as RegularTextBIcon } from './text-b';
import { TextBIconDuotone as TextBIconDuotone } from './text-b-duotone';
import { TextBIconBold as TextBIconBold } from './text-b-bold';
import { TextBIconBoldDuotone as TextBIconBoldDuotone } from './text-b-bold-duotone';
import { TextBIconFill as TextBIconFill } from './text-b-fill';
import { TextBIconFillDuotone as TextBIconFillDuotone } from './text-b-fill-duotone';

export interface TextBIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextBIcon = memo(forwardRef<SVGSVGElement, TextBIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextBIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextBIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextBIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextBIconFill ref={ref} {...props} />;
  if (duotone) return <TextBIconDuotone ref={ref} {...props} />;
  return <RegularTextBIcon ref={ref} {...props} />;
}));

TextBIcon.displayName = 'TextBIcon';

export { TextBIcon };
