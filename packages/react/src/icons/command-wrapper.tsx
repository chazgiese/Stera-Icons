import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommandIcon as RegularCommandIcon } from './command';
import { CommandIconDuotone as CommandIconDuotone } from './command-duotone';
import { CommandIconBold as CommandIconBold } from './command-bold';
import { CommandIconBoldDuotone as CommandIconBoldDuotone } from './command-bold-duotone';
import { CommandIconFill as CommandIconFill } from './command-fill';
import { CommandIconFillDuotone as CommandIconFillDuotone } from './command-fill-duotone';

export interface CommandIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CommandIcon = memo(forwardRef<SVGSVGElement, CommandIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CommandIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CommandIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CommandIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CommandIconFill ref={ref} {...props} />;
  if (duotone) return <CommandIconDuotone ref={ref} {...props} />;
  return <RegularCommandIcon ref={ref} {...props} />;
}));

CommandIcon.displayName = 'CommandIcon';

export { CommandIcon };
