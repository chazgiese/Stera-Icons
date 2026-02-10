import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandBoldProps = Omit<IconBaseProps, 'children'>;

const CommandBold = memo(
  forwardRef<SVGSVGElement, CommandBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="command-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.33 3a3.67 3.67 0 0 1 0 7.33h-1.66v3.34h1.66a3.67 3.67 0 1 1-3.66 3.66v-1.66h-3.34v1.66a3.67 3.67 0 1 1-3.66-3.66h1.66v-3.34H6.67a3.67 3.67 0 1 1 3.66-3.66v1.66h3.34V6.67A3.67 3.67 0 0 1 17.33 3M6.67 15.67a1.67 1.67 0 1 0 1.66 1.66v-1.66zm9 1.66a1.67 1.67 0 1 0 1.66-1.66h-1.66zm-5.34-3.66h3.34v-3.34h-3.34zM6.67 5a1.67 1.67 0 0 0 0 3.33h1.66V6.67C8.33 5.75 7.6 5 6.67 5m10.66 0c-.92 0-1.66.75-1.66 1.67v1.66h1.66a1.67 1.67 0 0 0 0-3.33" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandBold.displayName = 'CommandBold';

// Triple export pattern (lucide-react style)
export { CommandBold, CommandBold as CommandBoldIcon, CommandBold as SiCommandBold };
export default CommandBold;
export type { CommandBoldProps };
