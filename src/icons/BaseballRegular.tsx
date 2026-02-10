import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularProps = Omit<IconBaseProps, 'children'>;

const BaseballRegular = memo(
  forwardRef<SVGSVGElement, BaseballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball" {...props}>
      <path fill="currentColor" d="M9.75 15.41a.75.75 0 0 1 1.05.17q.25.34.47.7a.75.75 0 0 1-1.28.78l-.4-.6a.75.75 0 0 1 .16-1.05M15.41 9.75a.75.75 0 0 1 1.05-.17l.6.4a.75.75 0 0 1-.78 1.29l-.7-.47a.75.75 0 0 1-.17-1.05M6.69 12.98a.75.75 0 0 1 1.03-.25l.7.47a.75.75 0 0 1-.88 1.22l-.6-.4a.75.75 0 0 1-.25-1.04M12.73 7.72a.75.75 0 0 1 1.28-.78l.4.6a.75.75 0 0 1-1.2.88q-.26-.34-.48-.7" />
        <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m1.07 1.07a8.2 8.2 0 0 0-2.39 5.1q.42.07.83.17a.75.75 0 0 1-.35 1.46l-.47-.1a8.2 8.2 0 0 0 7.4 7.41l-.1-.47a.75.75 0 0 1 1.46-.35q.1.4.17.83a8.2 8.2 0 0 0 7.5-7.5q-.42-.06-.83-.16a.75.75 0 0 1 .35-1.46l.47.1a8.2 8.2 0 0 0-7.4-7.41l.1.47a.75.75 0 0 1-1.46.35q-.1-.4-.17-.83a8.2 8.2 0 0 0-5.11 2.39" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballRegular.displayName = 'BaseballRegular';

// Triple export pattern (lucide-react style)
export { BaseballRegular, BaseballRegular as BaseballRegularIcon, BaseballRegular as SiBaseballRegular };
export default BaseballRegular;
export type { BaseballRegularProps };
