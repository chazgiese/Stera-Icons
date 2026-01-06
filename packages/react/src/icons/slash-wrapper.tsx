import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlashIcon as RegularSlashIcon } from './slash';
import { SlashIconDuotone as SlashIconDuotone } from './slash-duotone';
import { SlashIconBold as SlashIconBold } from './slash-bold';
import { SlashIconBoldDuotone as SlashIconBoldDuotone } from './slash-bold-duotone';
import { SlashIconFill as SlashIconFill } from './slash-fill';
import { SlashIconFillDuotone as SlashIconFillDuotone } from './slash-fill-duotone';

export interface SlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SlashIcon = memo(forwardRef<SVGSVGElement, SlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SlashIconFill ref={ref} {...props} />;
  if (duotone) return <SlashIconDuotone ref={ref} {...props} />;
  return <RegularSlashIcon ref={ref} {...props} />;
}));

SlashIcon.displayName = 'SlashIcon';

export { SlashIcon };
