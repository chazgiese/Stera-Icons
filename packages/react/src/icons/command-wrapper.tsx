import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommandIcon as CommandIconRegular } from './command';
import { CommandIconBold } from './command-bold';
import { CommandIconFilled } from './command-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CommandIconProps extends IconProps {
  variant?: IconVariant;
}

const CommandIcon = memo(forwardRef<SVGSVGElement, CommandIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CommandIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CommandIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CommandIconRegular ref={ref} {...props} />;
  }
}));

CommandIcon.displayName = 'CommandIcon';

export { CommandIcon };
