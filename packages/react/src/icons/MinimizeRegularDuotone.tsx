import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinimizeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinimizeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MinimizeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 14.25c1.24 0 2.25 1 2.25 2.25V20a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 0-.75-.75H4a.75.75 0 0 1 0-1.5zM15 3.25c.41 0 .75.34.75.75v3.5c0 .41.34.75.75.75H20a.75.75 0 0 1 0 1.5h-3.5c-1.24 0-2.25-1-2.25-2.25V4c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M20 14.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 0-.75.75V20a.75.75 0 0 1-1.5 0v-3.5c0-1.24 1-2.25 2.25-2.25zM9 3.25c.41 0 .75.34.75.75v3.5c0 1.24-1 2.25-2.25 2.25H4a.75.75 0 0 1 0-1.5h3.5c.41 0 .75-.34.75-.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

MinimizeRegularDuotone.displayName = 'MinimizeRegularDuotone';

export { MinimizeRegularDuotone };
export type { MinimizeRegularDuotoneProps };
