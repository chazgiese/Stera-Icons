import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularProps = Omit<IconBaseProps, 'children'>;

const BaseballRegular = memo(
  forwardRef<SVGSVGElement, BaseballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball" {...props}>
      <path fill="currentColor" d="M15.65 9.95a.75.75 0 0 1 1.05-.16l.74.49a.75.75 0 0 1-.79 1.28l-.83-.56a.75.75 0 0 1-.17-1.05M9.79 16.7a.75.75 0 0 1 1.21-.88q.3.4.56.83a.75.75 0 0 1-1.28.78q-.23-.38-.49-.73M6.32 12.69a.75.75 0 0 1 1.03-.25l.83.56a.75.75 0 0 1-.88 1.21l-.74-.49a.75.75 0 0 1-.24-1.03M12.44 7.35a.75.75 0 0 1 1.28-.78q.23.38.49.73a.75.75 0 0 1-1.21.88q-.3-.4-.56-.83" />
        <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m1.06 1.06a9.2 9.2 0 0 0-2.62 5.29q.41.07.82.16a.75.75 0 1 1-.35 1.46l-.55-.12a9.2 9.2 0 0 0 8.98 9q-.04-.3-.12-.56a.75.75 0 0 1 1.46-.35q.1.41.17.82a9.2 9.2 0 0 0 7.91-7.9q-.41-.07-.82-.17a.75.75 0 0 1 .35-1.46l.55.12a9.2 9.2 0 0 0-8.98-9l.11.56a.75.75 0 0 1-1.45.35q-.1-.41-.17-.82a9.2 9.2 0 0 0-5.3 2.62" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballRegular.displayName = 'BaseballRegular';

// Triple export pattern (lucide-react style)
export { BaseballRegular, BaseballRegular as BaseballRegularIcon, BaseballRegular as SiBaseballRegular };
export default BaseballRegular;
export type { BaseballRegularProps };
