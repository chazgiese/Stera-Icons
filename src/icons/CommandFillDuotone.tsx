import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandFillDuotone = memo(
  forwardRef<SVGSVGElement, CommandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="command-fill-duotone" {...props}>
      <path d="M16.17 13.17h1.16a4.17 4.17 0 1 1-4.16 4.16v-6.66h3zm0 4.16a1.17 1.17 0 1 0 1.16-1.16h-1.16zM6.67 2.5c2.3 0 4.16 1.87 4.16 4.17v6.66h-3v-2.5H6.67a4.17 4.17 0 1 1 0-8.33m0 3a1.17 1.17 0 0 0 0 2.33h1.16V6.67c0-.65-.52-1.17-1.16-1.17" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.33 16.17h-2.5v1.16a4.17 4.17 0 1 1-4.16-4.16h6.66zm-6.66 0a1.17 1.17 0 1 0 1.16 1.16v-1.16zM17.33 2.5a4.17 4.17 0 0 1 0 8.33h-6.66v-3h2.5V6.67c0-2.3 1.86-4.17 4.16-4.17m0 3c-.64 0-1.16.52-1.16 1.17v1.16h1.16a1.17 1.17 0 1 0 0-2.33" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFillDuotone.displayName = 'CommandFillDuotone';

// Triple export pattern (lucide-react style)
export { CommandFillDuotone, CommandFillDuotone as CommandFillDuotoneIcon, CommandFillDuotone as SiCommandFillDuotone };
export default CommandFillDuotone;
export type { CommandFillDuotoneProps };
