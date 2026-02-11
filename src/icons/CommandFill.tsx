import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillProps = Omit<IconBaseProps, 'children'>;

const CommandFill = memo(
  forwardRef<SVGSVGElement, CommandFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="command-fill" {...props}>
      <path fillRule="evenodd" d="M17.33 2.5a4.17 4.17 0 0 1 0 8.33h-1.16v2.34h1.16a4.17 4.17 0 1 1-4.16 4.16v-1.16h-2.34v1.16a4.17 4.17 0 1 1-4.16-4.16h1.16v-2.34H6.67a4.17 4.17 0 1 1 4.16-4.16v1.16h2.34V6.67c0-2.3 1.86-4.17 4.16-4.17M6.67 16.17a1.17 1.17 0 1 0 1.16 1.16v-1.16zm9.5 1.16a1.17 1.17 0 1 0 1.16-1.16h-1.16zm-5.34-4.16h2.34v-2.34h-2.34zM6.67 5.5a1.17 1.17 0 0 0 0 2.33h1.16V6.67c0-.65-.52-1.17-1.16-1.17m10.66 0c-.64 0-1.16.52-1.16 1.17v1.16h1.16a1.17 1.17 0 0 0 0-2.33" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFill.displayName = 'CommandFill';

// Triple export pattern (lucide-react style)
export { CommandFill, CommandFill as CommandFillIcon, CommandFill as SiCommandFill };
export default CommandFill;
export type { CommandFillProps };
