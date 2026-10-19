import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularProps = Omit<IconBaseProps, 'children'>;

const BaseballRegular = memo(
  forwardRef<SVGSVGElement, BaseballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 15.41c.34-.24.8-.16 1.05.17q.25.34.47.7c.21.36.1.82-.25 1.03s-.81.1-1.03-.25l-.4-.6c-.25-.33-.17-.8.16-1.05M15.41 9.75c.25-.33.72-.4 1.05-.17l.3.21.3.2c.36.21.47.68.25 1.03s-.67.46-1.03.25l-.35-.23-.35-.24c-.33-.25-.4-.71-.17-1.05M6.69 12.98c.21-.35.67-.46 1.03-.25l.35.23.35.24c.33.25.4.71.17 1.05-.25.34-.72.41-1.05.17l-.3-.21-.3-.2c-.36-.21-.47-.68-.25-1.03M12.73 7.72c-.21-.35-.1-.82.25-1.03s.81-.1 1.03.25l.4.6c.25.33.17.8-.16 1.05-.34.24-.8.17-1.05-.17q-.25-.34-.47-.7" />
        <path fillRule="evenodd" d="M4.75 4.75c4-4 10.5-4 14.5 0s4 10.5 0 14.5-10.5 4-14.5 0-4-10.5 0-14.5m1.06 1.06c-1.55 1.56-2.4 3.55-2.54 5.58q.23-.15.51-.11.42.06.83.16c.4.1.65.5.56.9-.1.41-.5.66-.9.56l-.72-.14q-.16-.02-.27-.1c.15 2.02 1 3.99 2.53 5.53 1.54 1.54 3.51 2.38 5.53 2.53q-.08-.12-.1-.27l-.14-.71c-.1-.4.15-.8.55-.9s.8.15.9.55q.1.4.17.83.03.28-.1.5c2.02-.14 4.01-.98 5.57-2.53 1.55-1.55 2.4-3.54 2.53-5.57q-.22.14-.5.1-.42-.06-.83-.16c-.4-.1-.65-.5-.56-.9.1-.41.5-.66.9-.56l.72.14q.16.02.27.1c-.15-2.01-1-3.99-2.53-5.53-1.54-1.54-3.51-2.38-5.53-2.53q.08.12.1.27.06.36.15.71c.1.4-.16.8-.56.9s-.8-.15-.9-.55q-.1-.4-.17-.83-.03-.28.1-.5c-2.02.14-4.01.98-5.57 2.53" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballRegular.displayName = 'BaseballRegular';

// Triple export pattern
export { BaseballRegular, BaseballRegular as BaseballRegularIcon, BaseballRegular as SiBaseballRegular };
export default BaseballRegular;
export type { BaseballRegularProps };
