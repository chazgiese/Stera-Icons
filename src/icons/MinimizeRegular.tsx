import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeRegularProps = Omit<IconBaseProps, 'children'>;

const MinimizeRegular = memo(
  forwardRef<SVGSVGElement, MinimizeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="minimize" {...props}>
      <path d="M7.5 14.25c1.24 0 2.25 1 2.25 2.25V20a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 0-.75-.75H4a.75.75 0 0 1 0-1.5zM20 14.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 0-.75.75V20a.75.75 0 0 1-1.5 0v-3.5c0-1.24 1-2.25 2.25-2.25zM9 3.25c.41 0 .75.34.75.75v3.5c0 1.24-1 2.25-2.25 2.25H4a.75.75 0 0 1 0-1.5h3.5c.41 0 .75-.34.75-.75V4c0-.41.34-.75.75-.75M15 3.25c.41 0 .75.34.75.75v3.5c0 .41.34.75.75.75H20a.75.75 0 0 1 0 1.5h-3.5c-1.24 0-2.25-1-2.25-2.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

MinimizeRegular.displayName = 'MinimizeRegular';

// Triple export pattern (lucide-react style)
export { MinimizeRegular, MinimizeRegular as MinimizeRegularIcon, MinimizeRegular as SiMinimizeRegular };
export default MinimizeRegular;
export type { MinimizeRegularProps };
