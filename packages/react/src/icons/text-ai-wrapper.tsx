import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAiIcon as RegularTextAiIcon } from './text-ai';
import { TextAiIconDuotone as TextAiIconDuotone } from './text-ai-duotone';
import { TextAiIconBold as TextAiIconBold } from './text-ai-bold';
import { TextAiIconBoldDuotone as TextAiIconBoldDuotone } from './text-ai-bold-duotone';
import { TextAiIconFill as TextAiIconFill } from './text-ai-fill';
import { TextAiIconFillDuotone as TextAiIconFillDuotone } from './text-ai-fill-duotone';

export interface TextAiIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextAiIcon = memo(forwardRef<SVGSVGElement, TextAiIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAiIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextAiIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextAiIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextAiIconFill ref={ref} {...props} />;
  if (duotone) return <TextAiIconDuotone ref={ref} {...props} />;
  return <RegularTextAiIcon ref={ref} {...props} />;
}));

TextAiIcon.displayName = 'TextAiIcon';

export { TextAiIcon };
