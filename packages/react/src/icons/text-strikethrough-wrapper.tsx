import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextStrikethroughIcon as RegularTextStrikethroughIcon } from './text-strikethrough';
import { TextStrikethroughIconDuotone as TextStrikethroughIconDuotone } from './text-strikethrough-duotone';
import { TextStrikethroughIconBold as TextStrikethroughIconBold } from './text-strikethrough-bold';
import { TextStrikethroughIconBoldDuotone as TextStrikethroughIconBoldDuotone } from './text-strikethrough-bold-duotone';
import { TextStrikethroughIconFill as TextStrikethroughIconFill } from './text-strikethrough-fill';
import { TextStrikethroughIconFillDuotone as TextStrikethroughIconFillDuotone } from './text-strikethrough-fill-duotone';

export interface TextStrikethroughIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextStrikethroughIcon = memo(forwardRef<SVGSVGElement, TextStrikethroughIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextStrikethroughIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextStrikethroughIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextStrikethroughIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextStrikethroughIconFill ref={ref} {...props} />;
  if (duotone) return <TextStrikethroughIconDuotone ref={ref} {...props} />;
  return <RegularTextStrikethroughIcon ref={ref} {...props} />;
}));

TextStrikethroughIcon.displayName = 'TextStrikethroughIcon';

export { TextStrikethroughIcon };
