import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CommandRegular } from './CommandRegular';
import { CommandRegularDuotone } from './CommandRegularDuotone';
import { CommandBold } from './CommandBold';
import { CommandBoldDuotone } from './CommandBoldDuotone';
import { CommandFill } from './CommandFill';
import { CommandFillDuotone } from './CommandFillDuotone';

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
