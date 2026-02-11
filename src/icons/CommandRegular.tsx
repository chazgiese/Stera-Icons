import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandRegularProps = Omit<IconBaseProps, 'children'>;

const CommandRegular = memo(
  forwardRef<SVGSVGElement, CommandRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="command" {...props}>
      <path fillRule="evenodd" d="M17.33 3.25a3.42 3.42 0 0 1 0 6.83h-1.91v3.84h1.91a3.42 3.42 0 1 1-3.41 3.41v-1.91h-3.84v1.91a3.42 3.42 0 1 1-3.41-3.41h1.91v-3.84H6.67a3.42 3.42 0 1 1 3.41-3.41v1.91h3.84V6.67a3.4 3.4 0 0 1 3.41-3.42M6.67 15.42a1.92 1.92 0 1 0 1.91 1.91v-1.91zm8.75 1.91a1.92 1.92 0 1 0 1.91-1.91h-1.91zm-5.34-3.41h3.84v-3.84h-3.84zM6.67 4.75a1.92 1.92 0 0 0 0 3.83h1.91V6.67c0-1.06-.85-1.92-1.91-1.92m10.66 0c-1.05 0-1.91.86-1.91 1.92v1.91h1.91a1.92 1.92 0 0 0 0-3.83" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegular.displayName = 'CommandRegular';

// Triple export pattern (lucide-react style)
export { CommandRegular, CommandRegular as CommandRegularIcon, CommandRegular as SiCommandRegular };
export default CommandRegular;
export type { CommandRegularProps };
