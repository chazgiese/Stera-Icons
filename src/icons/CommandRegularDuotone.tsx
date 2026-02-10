import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommandRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="command-duotone" {...props}>
      <path d="M15.42 13.92h1.91a3.42 3.42 0 1 1-3.41 3.41V10h1.5zm0 3.41a1.92 1.92 0 1 0 1.91-1.91h-1.91zM6.67 3.25a3.4 3.4 0 0 1 3.41 3.42V14h-1.5v-3.92H6.67a3.42 3.42 0 1 1 0-6.83m0 1.5a1.92 1.92 0 0 0 0 3.83h1.91V6.67c0-1.06-.85-1.92-1.91-1.92" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 15.42h-3.92v1.91a3.42 3.42 0 1 1-3.41-3.41H14zm-7.33 0a1.92 1.92 0 1 0 1.91 1.91v-1.91zM17.33 3.25a3.42 3.42 0 0 1 0 6.83H10v-1.5h3.92V6.67a3.4 3.4 0 0 1 3.41-3.42m0 1.5c-1.06 0-1.91.86-1.91 1.92v1.91h1.91a1.92 1.92 0 1 0 0-3.83" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegularDuotone.displayName = 'CommandRegularDuotone';

// Triple export pattern (lucide-react style)
export { CommandRegularDuotone, CommandRegularDuotone as CommandRegularDuotoneIcon, CommandRegularDuotone as SiCommandRegularDuotone };
export default CommandRegularDuotone;
export type { CommandRegularDuotoneProps };
