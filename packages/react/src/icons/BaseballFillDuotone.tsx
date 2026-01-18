import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BaseballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballFillDuotone = memo(
  forwardRef<SVGSVGElement, BaseballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m9.1 16.06a1 1 0 0 0-1.94.47q.1.42.17.84a1 1 0 0 0 1.98-.3q-.09-.51-.2-1.01m-2.11-4.6a1 1 0 0 0-1.62 1.17q.26.34.48.72a1 1 0 0 0 1.7-1.05q-.26-.43-.56-.85m-3.73-3.45a1 1 0 0 0-1.05 1.7l.72.49a1 1 0 0 0 1.18-1.62zm13.26-.84a1 1 0 0 0-.46 1.94q.5.12 1 .2a1 1 0 1 0 .31-1.98q-.42-.06-.85-.16m-18.02-.92a1 1 0 0 0-.31 1.98q.42.06.84.17a1 1 0 0 0 .47-1.95q-.5-.12-1-.2m14.13-.89a1 1 0 0 0-1.18 1.62l.85.57a1 1 0 0 0 1.05-1.7zm-2.92-3.14a1 1 0 0 0-1.7 1.04q.26.43.56.85a1 1 0 0 0 1.62-1.18q-.25-.35-.48-.71M12.45 2.4a1 1 0 0 0-1.98.31q.09.5.2 1a1 1 0 0 0 1.95-.47z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M19.54 12.13a1 1 0 0 1 1.2-.74q.43.1.85.16a1 1 0 0 1-.31 1.98q-.5-.08-1-.2a1 1 0 0 1-.74-1.2M11.38 20.75a1 1 0 1 1 1.95-.47q.12.5.2 1a1 1 0 0 1-1.98.31q-.06-.42-.17-.84M9.59 16.85a1 1 0 0 1 1.62-1.18q.3.42.56.85a1 1 0 0 1-1.7 1.05q-.22-.37-.48-.72M15.45 9.8a1 1 0 0 1 1.4-.21l.72.48a1 1 0 0 1-1.05 1.7l-.85-.57a1 1 0 0 1-.22-1.4M6.1 12.56a1 1 0 0 1 1.38-.33l.85.57a1 1 0 0 1-1.18 1.62l-.72-.49a1 1 0 0 1-.33-1.37M12.23 7.48a1 1 0 0 1 1.7-1.04q.23.36.48.71a1 1 0 0 1-1.62 1.18q-.3-.42-.56-.85M10.47 2.72a1 1 0 0 1 1.98-.31q.06.42.17.85a1 1 0 0 1-1.95.46q-.12-.5-.2-1M1.58 11.3a1 1 0 0 1 1.14-.83q.5.08 1 .2a1 1 0 1 1-.47 1.95q-.42-.1-.84-.17a1 1 0 0 1-.83-1.15" />
    </IconBase>
  ))
);

BaseballFillDuotone.displayName = 'BaseballFillDuotone';

// Triple export pattern (lucide-react style)
export { BaseballFillDuotone, BaseballFillDuotone as BaseballFillDuotoneIcon, BaseballFillDuotone as SiBaseballFillDuotone };
export type { BaseballFillDuotoneProps };
