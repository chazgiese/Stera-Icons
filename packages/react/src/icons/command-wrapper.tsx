import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CommandIcon as RegularCommandIcon } from './command';
import { CommandIconBold } from './command-bold';
import { CommandIconFilled } from './command-filled';
import { CommandIconFilltone } from './command-filltone';
import { CommandIconLinetone } from './command-linetone';

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
    case 'filltone':
      return <CommandIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CommandIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCommandIcon ref={ref} {...props} />;
  }
}));

CommandIcon.displayName = 'CommandIcon';

export { CommandIcon };
