import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandBoldDuotone = memo(
  forwardRef<SVGSVGElement, CommandBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="command-bold-duotone" {...props}>
      <path d="M15.67 13.67h1.66a3.67 3.67 0 1 1-3.66 3.66v-7.1h2zm0 3.66a1.67 1.67 0 1 0 1.66-1.66h-1.66zM6.67 3a3.67 3.67 0 0 1 3.66 3.67v7.1h-2v-3.44H6.67a3.67 3.67 0 1 1 0-7.33m0 2a1.67 1.67 0 0 0 0 3.33h1.66V6.67C8.33 5.75 7.6 5 6.67 5" opacity={0.4} />
        <path fillRule="evenodd" d="M13.78 15.67h-3.45v1.66a3.67 3.67 0 1 1-3.66-3.66h7.1zm-7.11 0a1.67 1.67 0 1 0 1.66 1.66v-1.66zM17.33 3a3.67 3.67 0 0 1 0 7.33h-7.1v-2h3.44V6.67A3.67 3.67 0 0 1 17.33 3m0 2c-.92 0-1.66.75-1.66 1.67v1.66h1.66a1.67 1.67 0 1 0 0-3.33" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandBoldDuotone.displayName = 'CommandBoldDuotone';

// Triple export pattern (lucide-react style)
export { CommandBoldDuotone, CommandBoldDuotone as CommandBoldDuotoneIcon, CommandBoldDuotone as SiCommandBoldDuotone };
export default CommandBoldDuotone;
export type { CommandBoldDuotoneProps };
