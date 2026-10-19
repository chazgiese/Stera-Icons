import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BaseballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.84 11.65c.1-.4.5-.65.9-.55l.71.14q.16.02.27.1.05.63 0 1.28-.22.14-.5.1-.42-.06-.83-.16c-.4-.1-.65-.5-.55-.9M11.1 19.74c-.1-.4.15-.8.55-.9s.8.15.9.55q.1.4.17.83.03.28-.1.5-.65.05-1.28 0-.08-.12-.1-.27zM9.59 16.46c-.25-.33-.17-.8.16-1.05.34-.24.8-.17 1.05.17q.25.34.47.7c.22.36.1.82-.25 1.03s-.81.1-1.03-.25zM15.41 9.75c.25-.33.72-.4 1.05-.17l.3.21.3.2c.36.21.47.68.26 1.03-.22.35-.68.46-1.04.25l-.35-.23-.35-.24c-.33-.25-.4-.71-.17-1.05M6.69 12.98c.21-.35.68-.46 1.03-.25l.35.23.35.24c.34.25.41.71.17 1.05-.25.33-.71.41-1.05.17l-.3-.21-.3-.2c-.36-.21-.47-.68-.25-1.03M12.73 7.72c-.21-.35-.1-.82.25-1.03s.82-.1 1.03.25l.4.6c.25.33.17.8-.16 1.05-.34.24-.8.17-1.05-.17zM11.39 3.27q.63-.04 1.27 0 .08.13.1.28.06.36.15.71c.1.4-.16.8-.56.9s-.8-.15-.9-.55q-.1-.4-.17-.83-.03-.28.1-.5M3.27 11.39q.23-.15.51-.11.42.06.83.16c.4.1.65.5.56.9-.1.41-.5.66-.9.56l-.72-.14q-.16-.02-.27-.1-.06-.63 0-1.27" opacity={0.4} />
        <path fillRule="evenodd" d="M4.75 4.75c4-4 10.5-4 14.5 0s4 10.5 0 14.5-10.5 4-14.5 0-4-10.5 0-14.5m1.06 1.06c-3.41 3.42-3.41 8.96 0 12.38s8.96 3.41 12.38 0 3.41-8.96 0-12.38-8.96-3.41-12.38 0" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballRegularDuotone.displayName = 'BaseballRegularDuotone';

// Triple export pattern
export { BaseballRegularDuotone, BaseballRegularDuotone as BaseballRegularDuotoneIcon, BaseballRegularDuotone as SiBaseballRegularDuotone };
export default BaseballRegularDuotone;
export type { BaseballRegularDuotoneProps };
