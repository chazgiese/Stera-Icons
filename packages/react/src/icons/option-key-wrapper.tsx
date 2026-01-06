import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OptionKeyIcon as RegularOptionKeyIcon } from './option-key';
import { OptionKeyIconDuotone as OptionKeyIconDuotone } from './option-key-duotone';
import { OptionKeyIconBold as OptionKeyIconBold } from './option-key-bold';
import { OptionKeyIconBoldDuotone as OptionKeyIconBoldDuotone } from './option-key-bold-duotone';
import { OptionKeyIconFill as OptionKeyIconFill } from './option-key-fill';
import { OptionKeyIconFillDuotone as OptionKeyIconFillDuotone } from './option-key-fill-duotone';

export interface OptionKeyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const OptionKeyIcon = memo(forwardRef<SVGSVGElement, OptionKeyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <OptionKeyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <OptionKeyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <OptionKeyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <OptionKeyIconFill ref={ref} {...props} />;
  if (duotone) return <OptionKeyIconDuotone ref={ref} {...props} />;
  return <RegularOptionKeyIcon ref={ref} {...props} />;
}));

OptionKeyIcon.displayName = 'OptionKeyIcon';

export { OptionKeyIcon };
