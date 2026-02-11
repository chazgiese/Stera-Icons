import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballFillProps = Omit<IconBaseProps, 'children'>;

const BaseballFill = memo(
  forwardRef<SVGSVGElement, BaseballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-fill" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m14.87 5.93a1 1 0 0 0-.47 1.94q.42.1.85.17a1 1 0 0 0 .31-1.98zm-8.2 7.73a1 1 0 0 0-.75 1.2q.09.36.14.7a1 1 0 0 0 1.97-.31q-.06-.43-.16-.85a1 1 0 0 0-1.2-.74m-2-3.38a1 1 0 0 0-.22 1.4l.4.58a1 1 0 0 0 1.7-1.04q-.22-.36-.48-.72a1 1 0 0 0-1.4-.22m7-5.83A1 1 0 0 0 15.44 11l.72.48a1 1 0 0 0 1.05-1.7zm-8.75 3.14a1 1 0 0 0-1.05 1.7l.6.4A1 1 0 0 0 8.56 13zm5-6.04a1 1 0 0 0-.33 1.37q.22.36.48.72a1 1 0 0 0 1.62-1.18l-.4-.58a1 1 0 0 0-1.37-.33m-.98-3.8a1 1 0 0 0-.84 1.14q.07.43.17.85a1 1 0 0 0 1.95-.47q-.08-.34-.14-.7a1 1 0 0 0-1.14-.82m-8.05 8.35a1 1 0 0 0-.3 1.98q.33.05.68.14a1 1 0 0 0 .47-1.95q-.42-.1-.85-.17" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballFill.displayName = 'BaseballFill';

// Triple export pattern (lucide-react style)
export { BaseballFill, BaseballFill as BaseballFillIcon, BaseballFill as SiBaseballFill };
export default BaseballFill;
export type { BaseballFillProps };
