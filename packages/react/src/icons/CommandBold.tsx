import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommandBoldProps = Omit<IconBaseProps, 'children'>;

const CommandBold = memo(
  forwardRef<SVGSVGElement, CommandBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 2a4 4 0 0 1 0 8h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2v-4H6a4 4 0 1 1 4-4v2h4V6a4 4 0 0 1 4-4M6 16a2 2 0 1 0 2 2v-2zm10 2a2 2 0 1 0 2-2h-2zm-6-4h4v-4h-4zM6 4a2 2 0 1 0 0 4h2V6a2 2 0 0 0-2-2m12 0a2 2 0 0 0-2 2v2h2a2 2 0 1 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandBold.displayName = 'CommandBold';

// Triple export pattern (lucide-react style)
export { CommandBold, CommandBold as CommandBoldIcon, CommandBold as SiCommandBold };
export type { CommandBoldProps };
