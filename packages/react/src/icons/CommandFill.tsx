import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommandFillProps = Omit<IconBaseProps, 'children'>;

const CommandFill = memo(
  forwardRef<SVGSVGElement, CommandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 1.75a4.25 4.25 0 0 1 0 8.5h-1.75v3.5H18A4.25 4.25 0 1 1 13.75 18v-1.75h-3.5V18A4.25 4.25 0 1 1 6 13.75h1.75v-3.5H6A4.25 4.25 0 1 1 10.25 6v1.75h3.5V6c0-2.35 1.9-4.25 4.25-4.25M6 16.25A1.75 1.75 0 1 0 7.75 18v-1.75zM16.25 18A1.75 1.75 0 1 0 18 16.25h-1.75zm-6-4.25h3.5v-3.5h-3.5zM6 4.25a1.75 1.75 0 1 0 0 3.5h1.75V6c0-.97-.78-1.75-1.75-1.75m12 0c-.97 0-1.75.78-1.75 1.75v1.75H18a1.75 1.75 0 1 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFill.displayName = 'CommandFill';

// Triple export pattern (lucide-react style)
export { CommandFill, CommandFill as CommandFillIcon, CommandFill as SiCommandFill };
export type { CommandFillProps };
