import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballFillDuotone = memo(
  forwardRef<SVGSVGElement, BaseballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m14.87 5.93a1 1 0 0 0-.47 1.94q.42.1.85.17a1 1 0 0 0 .31-1.98zm-8.2 7.73a1 1 0 0 0-.75 1.2q.09.36.14.7a1 1 0 0 0 1.97-.31q-.06-.43-.16-.85a1 1 0 0 0-1.2-.74m-2-3.38a1 1 0 0 0-.22 1.4l.4.58a1 1 0 0 0 1.7-1.04q-.22-.36-.48-.72a1 1 0 0 0-1.4-.22m7-5.83A1 1 0 0 0 15.44 11l.72.48a1 1 0 0 0 1.05-1.7zm-8.75 3.14a1 1 0 0 0-1.05 1.7l.6.4A1 1 0 0 0 8.56 13zm5-6.04a1 1 0 0 0-.33 1.37q.22.36.48.72a1 1 0 0 0 1.62-1.18l-.4-.58a1 1 0 0 0-1.37-.33m-.98-3.8a1 1 0 0 0-.84 1.14q.07.43.17.85a1 1 0 0 0 1.95-.47q-.08-.34-.14-.7a1 1 0 0 0-1.14-.82m-8.05 8.35a1 1 0 0 0-.3 1.98q.33.05.68.14a1 1 0 0 0 .47-1.95q-.42-.1-.85-.17" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.6 11.6a1 1 0 0 1 1.2-.74q.34.08.7.13a1 1 0 0 1-.32 1.98q-.43-.07-.85-.17a1 1 0 0 1-.74-1.2M10.85 19.8a1 1 0 0 1 1.95-.47l.17.85a1 1 0 0 1-1.98.31zM9.38 16.6A1 1 0 1 1 11 15.44l.48.72a1 1 0 0 1-1.7 1.04q-.2-.3-.4-.58M15.21 9.6a1 1 0 0 1 1.4-.22l.59.4a1 1 0 0 1-1.05 1.7l-.72-.48a1 1 0 0 1-.22-1.4M6.47 12.85a1 1 0 0 1 1.38-.33l.72.48a1 1 0 0 1-1.18 1.62l-.59-.4a1 1 0 0 1-.33-1.37M12.52 7.85a1 1 0 0 1 1.7-1.04q.2.3.4.58A1 1 0 0 1 13 8.57zM11.04 3.82A1 1 0 0 1 13 3.51q.05.34.14.7a1 1 0 0 1-1.95.46q-.1-.42-.16-.85M2.68 11.86a1 1 0 0 1 1.14-.83q.43.07.85.17a1 1 0 0 1-.47 1.95q-.34-.08-.69-.14a1 1 0 0 1-.83-1.15" />
    </IconBase>
  ))
);

BaseballFillDuotone.displayName = 'BaseballFillDuotone';

// Triple export pattern (lucide-react style)
export { BaseballFillDuotone, BaseballFillDuotone as BaseballFillDuotoneIcon, BaseballFillDuotone as SiBaseballFillDuotone };
export default BaseballFillDuotone;
export type { BaseballFillDuotoneProps };
