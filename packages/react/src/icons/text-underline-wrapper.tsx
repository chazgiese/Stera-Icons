import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextUnderlineIcon as RegularTextUnderlineIcon } from './text-underline';
import { TextUnderlineIconDuotone as TextUnderlineIconDuotone } from './text-underline-duotone';
import { TextUnderlineIconBold as TextUnderlineIconBold } from './text-underline-bold';
import { TextUnderlineIconBoldDuotone as TextUnderlineIconBoldDuotone } from './text-underline-bold-duotone';
import { TextUnderlineIconFill as TextUnderlineIconFill } from './text-underline-fill';
import { TextUnderlineIconFillDuotone as TextUnderlineIconFillDuotone } from './text-underline-fill-duotone';

export interface TextUnderlineIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextUnderlineIcon = memo(forwardRef<SVGSVGElement, TextUnderlineIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextUnderlineIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextUnderlineIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextUnderlineIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextUnderlineIconFill ref={ref} {...props} />;
  if (duotone) return <TextUnderlineIconDuotone ref={ref} {...props} />;
  return <RegularTextUnderlineIcon ref={ref} {...props} />;
}));

TextUnderlineIcon.displayName = 'TextUnderlineIcon';

export { TextUnderlineIcon };
