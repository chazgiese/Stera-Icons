import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommandRegularProps = Omit<IconBaseProps, 'children'>;

const CommandRegular = memo(
  forwardRef<SVGSVGElement, CommandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 2.25a3.75 3.75 0 1 1 0 7.5h-2.25v4.5H18A3.75 3.75 0 1 1 14.25 18v-2.25h-4.5V18A3.75 3.75 0 1 1 6 14.25h2.25v-4.5H6A3.75 3.75 0 1 1 9.75 6v2.25h4.5V6A3.75 3.75 0 0 1 18 2.25M6 15.75A2.25 2.25 0 1 0 8.25 18v-2.25zM15.75 18A2.25 2.25 0 1 0 18 15.75h-2.25zm-6-3.75h4.5v-4.5h-4.5zM6 3.75a2.25 2.25 0 0 0 0 4.5h2.25V6c0-1.24-1-2.25-2.25-2.25m12 0c-1.24 0-2.25 1-2.25 2.25v2.25H18a2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegular.displayName = 'CommandRegular';

export { CommandRegular };
export type { CommandRegularProps };
