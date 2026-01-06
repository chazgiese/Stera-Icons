import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomAiIcon as RegularAtomAiIcon } from './atom-ai';
import { AtomAiIconDuotone as AtomAiIconDuotone } from './atom-ai-duotone';
import { AtomAiIconBold as AtomAiIconBold } from './atom-ai-bold';
import { AtomAiIconBoldDuotone as AtomAiIconBoldDuotone } from './atom-ai-bold-duotone';
import { AtomAiIconFill as AtomAiIconFill } from './atom-ai-fill';
import { AtomAiIconFillDuotone as AtomAiIconFillDuotone } from './atom-ai-fill-duotone';

export interface AtomAiIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AtomAiIcon = memo(forwardRef<SVGSVGElement, AtomAiIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomAiIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AtomAiIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AtomAiIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AtomAiIconFill ref={ref} {...props} />;
  if (duotone) return <AtomAiIconDuotone ref={ref} {...props} />;
  return <RegularAtomAiIcon ref={ref} {...props} />;
}));

AtomAiIcon.displayName = 'AtomAiIcon';

export { AtomAiIcon };
