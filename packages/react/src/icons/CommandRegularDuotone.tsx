import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommandRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommandRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.75 14.25H18A3.75 3.75 0 1 1 14.25 18V9.75h1.5zm0 3.75A2.25 2.25 0 1 0 18 15.75h-2.25zM6 2.25A3.75 3.75 0 0 1 9.75 6v8.25h-1.5v-4.5H6a3.75 3.75 0 1 1 0-7.5m0 1.5a2.25 2.25 0 0 0 0 4.5h2.25V6c0-1.24-1-2.25-2.25-2.25" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.25 15.75h-4.5V18A3.75 3.75 0 1 1 6 14.25h8.25zm-8.25 0A2.25 2.25 0 1 0 8.25 18v-2.25zM18 2.25a3.75 3.75 0 1 1 0 7.5H9.75v-1.5h4.5V6A3.75 3.75 0 0 1 18 2.25m0 1.5c-1.24 0-2.25 1-2.25 2.25v2.25H18a2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegularDuotone.displayName = 'CommandRegularDuotone';

// Triple export pattern (lucide-react style)
export { CommandRegularDuotone, CommandRegularDuotone as CommandRegularDuotoneIcon, CommandRegularDuotone as SiCommandRegularDuotone };
export type { CommandRegularDuotoneProps };
