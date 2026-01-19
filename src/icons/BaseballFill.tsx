import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BaseballFillProps = Omit<IconBaseProps, 'children'>;

const BaseballFill = memo(
  forwardRef<SVGSVGElement, BaseballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m16.52 7.17a1 1 0 0 0-.46 1.94q.5.12 1 .2a1 1 0 0 0 .31-1.98q-.42-.06-.85-.16m-8.62 8.15a1 1 0 0 0-.74 1.2q.1.43.17.85a1 1 0 0 0 1.98-.31q-.09-.5-.2-1a1 1 0 0 0-1.2-.74m4.73-9.96a1 1 0 0 0-1.18 1.62l.85.57a1 1 0 0 0 1.05-1.7zM9.8 15.45a1 1 0 0 0-.22 1.4q.25.35.48.71a1 1 0 0 0 1.7-1.04q-.26-.43-.56-.85a1 1 0 0 0-1.4-.22m-2.33-3.22a1 1 0 0 0-1.05 1.7l.72.49a1 1 0 0 0 1.18-1.62zm5.08-6.13a1 1 0 0 0-.33 1.38q.26.43.56.85a1 1 0 0 0 1.62-1.18q-.26-.35-.48-.71a1 1 0 0 0-1.37-.34M11.3 1.58a1 1 0 0 0-.84 1.14q.09.5.2 1a1 1 0 0 0 1.95-.47q-.1-.42-.17-.84a1 1 0 0 0-1.14-.83m-8.59 8.89a1 1 0 0 0-.31 1.98q.42.06.85.16a1 1 0 0 0 .46-1.94q-.5-.12-1-.2" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballFill.displayName = 'BaseballFill';

// Triple export pattern (lucide-react style)
export { BaseballFill, BaseballFill as BaseballFillIcon, BaseballFill as SiBaseballFill };
export default BaseballFill;
export type { BaseballFillProps };
