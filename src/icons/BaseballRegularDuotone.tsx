import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BaseballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-duotone" {...props}>
      <path fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m1.07 1.07a8.2 8.2 0 0 0-2.39 5.1.75.75 0 0 0-.23 1.49l.24.04a8.2 8.2 0 0 0 7.4 7.41l.05.24a.75.75 0 0 0 1.48-.23 8.2 8.2 0 0 0 7.5-7.5.75.75 0 0 0 .23-1.48l-.24-.04a8.2 8.2 0 0 0-7.4-7.41l-.05-.24a.75.75 0 0 0-1.48.23 8.2 8.2 0 0 0-5.11 2.39" clipRule="evenodd" opacity={.4} />
        <path d="M18.84 11.65c.1-.4.5-.65.9-.55l.71.14a.75.75 0 0 1-.23 1.48q-.42-.07-.83-.16a.75.75 0 0 1-.55-.9M11.1 19.74a.75.75 0 1 1 1.45-.35q.1.4.17.83a.75.75 0 0 1-1.48.23zM9.75 15.41a.75.75 0 0 1 1.05.17q.25.34.47.7a.75.75 0 0 1-1.28.78l-.4-.6a.75.75 0 0 1 .16-1.05M15.41 9.75a.75.75 0 0 1 1.05-.17l.6.4a.75.75 0 0 1-.78 1.29l-.7-.47a.75.75 0 0 1-.17-1.05M6.69 12.98a.75.75 0 0 1 1.03-.25l.7.47a.75.75 0 0 1-.88 1.22l-.6-.4a.75.75 0 0 1-.25-1.04M12.73 7.72a.75.75 0 0 1 1.28-.78l.4.6a.75.75 0 0 1-1.2.88q-.26-.34-.48-.7M11.28 3.78a.75.75 0 0 1 1.48-.23q.06.36.15.71a.75.75 0 0 1-1.46.35q-.1-.4-.17-.83M2.93 11.9c.06-.4.44-.69.85-.62q.42.06.83.16a.75.75 0 0 1-.35 1.46l-.71-.14a.75.75 0 0 1-.62-.86" />
    </IconBase>
  ))
);

BaseballRegularDuotone.displayName = 'BaseballRegularDuotone';

// Triple export pattern (lucide-react style)
export { BaseballRegularDuotone, BaseballRegularDuotone as BaseballRegularDuotoneIcon, BaseballRegularDuotone as SiBaseballRegularDuotone };
export default BaseballRegularDuotone;
export type { BaseballRegularDuotoneProps };
