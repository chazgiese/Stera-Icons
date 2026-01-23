import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CommandRegular } from './CommandRegular.js';
import { CommandRegularDuotone } from './CommandRegularDuotone.js';
import { CommandBold } from './CommandBold.js';
import { CommandBoldDuotone } from './CommandBoldDuotone.js';
import { CommandFill } from './CommandFill.js';
import { CommandFillDuotone } from './CommandFillDuotone.js';

export interface CommandProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Command - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CommandRegular } from 'stera-icons/icons/CommandRegular';
 */
const Command = memo(forwardRef<SVGSVGElement, CommandProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CommandBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CommandBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CommandFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CommandFill ref={ref} {...rest} />;
  if (duotone) return <CommandRegularDuotone ref={ref} {...rest} />;
  return <CommandRegular ref={ref} {...rest} />;
}));

Command.displayName = 'Command';

// Triple export pattern (lucide-react style)
export { Command, Command as CommandIcon, Command as SiCommand };
export default Command;
