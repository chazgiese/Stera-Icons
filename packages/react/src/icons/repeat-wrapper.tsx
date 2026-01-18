import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RepeatIcon as RegularRepeatIcon } from './repeat';
import { RepeatIconDuotone as RepeatIconDuotone } from './repeat-duotone';
import { RepeatIconBold as RepeatIconBold } from './repeat-bold';
import { RepeatIconBoldDuotone as RepeatIconBoldDuotone } from './repeat-bold-duotone';
import { RepeatIconFill as RepeatIconFill } from './repeat-fill';
import { RepeatIconFillDuotone as RepeatIconFillDuotone } from './repeat-fill-duotone';

export interface RepeatIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RepeatIcon = memo(forwardRef<SVGSVGElement, RepeatIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RepeatIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RepeatIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RepeatIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RepeatIconFill ref={ref} {...props} />;
  if (duotone) return <RepeatIconDuotone ref={ref} {...props} />;
  return <RegularRepeatIcon ref={ref} {...props} />;
}));

RepeatIcon.displayName = 'RepeatIcon';

export { RepeatIcon };
