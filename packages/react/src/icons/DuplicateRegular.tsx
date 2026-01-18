import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicateRegularProps = Omit<IconBaseProps, 'children'>;

const DuplicateRegular = memo(
  forwardRef<SVGSVGElement, DuplicateRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 20.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5zM7.96 18.28c.4-.12.82.1.94.5q.04.14.1.24a2.3 2.3 0 0 0 1.22 1.08.75.75 0 0 1-.44 1.44 3.75 3.75 0 0 1-2.32-2.32c-.12-.4.1-.82.5-.94M20.1 18.78a.75.75 0 0 1 1.44.44q-.09.26-.2.48a3.8 3.8 0 0 1-2.12 1.84.75.75 0 0 1-.44-1.44q.14-.04.24-.1a2.3 2.3 0 0 0 1.08-1.22M11 2.25c.9 0 1.45 0 1.93.1a4.8 4.8 0 0 1 3.73 3.72c.1.48.09 1.04.09 1.93 0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75a3.25 3.25 0 0 0-2.61-3.44A10 10 0 0 0 11 3.75H9.4c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57V11c0 .96 0 1.34.06 1.63a3.25 3.25 0 0 0 3.44 2.62V13.5a.75.75 0 0 1 1.5 0V16c0 .41-.34.75-.75.75-.9 0-1.45 0-1.93-.1a4.8 4.8 0 0 1-3.73-3.72c-.1-.48-.09-1.04-.09-1.93V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.08 2.69-.06zM21 12.75c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M9.78 7.46a.75.75 0 0 1 .44 1.44q-.14.04-.24.1a2.3 2.3 0 0 0-1.08 1.22.75.75 0 0 1-1.44-.44q.08-.26.2-.48a3.8 3.8 0 0 1 2.12-1.84M18.28 7.96c.12-.4.54-.62.94-.5q.26.08.48.2a3.8 3.8 0 0 1 1.84 2.12.75.75 0 0 1-1.44.44l-.1-.24a2.3 2.3 0 0 0-1.22-1.08.75.75 0 0 1-.5-.94" />
    </IconBase>
  ))
);

DuplicateRegular.displayName = 'DuplicateRegular';

// Triple export pattern (lucide-react style)
export { DuplicateRegular, DuplicateRegular as DuplicateRegularIcon, DuplicateRegular as SiDuplicateRegular };
export type { DuplicateRegularProps };
