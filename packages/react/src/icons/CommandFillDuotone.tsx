import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandFillDuotone = memo(
  forwardRef<SVGSVGElement, CommandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 13.5H18a4.5 4.5 0 1 1-4.5 4.5v-7.5h3zm0 4.5a1.5 1.5 0 1 0 1.5-1.5h-1.5zM6 1.5A4.5 4.5 0 0 1 10.5 6v7.5h-3v-3H6a4.5 4.5 0 0 1 0-9m0 3a1.5 1.5 0 1 0 0 3h1.5V6c0-.83-.67-1.5-1.5-1.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.5 16.5h-3V18A4.5 4.5 0 1 1 6 13.5h7.5zm-7.5 0A1.5 1.5 0 1 0 7.5 18v-1.5zM18 1.5a4.5 4.5 0 1 1 0 9h-7.5v-3h3V6A4.5 4.5 0 0 1 18 1.5m0 3c-.83 0-1.5.67-1.5 1.5v1.5H18a1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFillDuotone.displayName = 'CommandFillDuotone';

// Triple export pattern (lucide-react style)
export { CommandFillDuotone, CommandFillDuotone as CommandFillDuotoneIcon, CommandFillDuotone as SiCommandFillDuotone };
export type { CommandFillDuotoneProps };
