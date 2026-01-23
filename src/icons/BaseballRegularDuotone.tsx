import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BaseballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m1.06 1.06a9.2 9.2 0 0 0-2.62 5.29l-.16-.03a.75.75 0 0 0-.23 1.48l.3.05a9.2 9.2 0 0 0 9 9l.05.3a.75.75 0 0 0 1.48-.23l-.03-.16a9.2 9.2 0 0 0 7.91-7.9l.16.02a.75.75 0 0 0 .23-1.48l-.3-.05a9.2 9.2 0 0 0-9-9l-.05-.3a.75.75 0 0 0-1.48.23l.03.16a9.2 9.2 0 0 0-5.3 2.62" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M19.78 12.18c.1-.4.5-.65.9-.55q.44.1.87.17a.75.75 0 0 1-.23 1.48q-.5-.07-.98-.2a.75.75 0 0 1-.56-.9M11.63 20.69a.75.75 0 0 1 1.45-.35q.12.48.2.98a.75.75 0 0 1-1.48.23q-.07-.44-.17-.86M9.96 15.65a.75.75 0 0 1 1.04.17q.3.4.56.83a.75.75 0 0 1-1.28.78q-.23-.38-.49-.73a.75.75 0 0 1 .17-1.05M15.65 9.95a.75.75 0 0 1 1.05-.16l.74.49a.75.75 0 0 1-.79 1.28l-.83-.56a.75.75 0 0 1-.17-1.05M6.32 12.69a.75.75 0 0 1 1.03-.25l.83.56a.75.75 0 0 1-.88 1.21l-.74-.49a.75.75 0 0 1-.24-1.03M12.44 7.35a.75.75 0 0 1 1.28-.78q.23.38.49.73a.75.75 0 0 1-1.21.88q-.3-.4-.56-.83M10.72 2.68a.75.75 0 0 1 1.48-.23q.07.44.17.86a.75.75 0 0 1-1.45.35q-.12-.48-.2-.98M1.82 11.34c.07-.4.45-.69.86-.62q.5.08.98.2a.75.75 0 0 1-.35 1.45q-.42-.1-.86-.17a.75.75 0 0 1-.63-.86" />
    </IconBase>
  ))
);

BaseballRegularDuotone.displayName = 'BaseballRegularDuotone';

// Triple export pattern (lucide-react style)
export { BaseballRegularDuotone, BaseballRegularDuotone as BaseballRegularDuotoneIcon, BaseballRegularDuotone as SiBaseballRegularDuotone };
export default BaseballRegularDuotone;
export type { BaseballRegularDuotoneProps };
