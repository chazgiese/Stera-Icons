import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BaseballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BaseballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m8.23-1.81a1 1 0 0 0-1.98.31l.08.4a9 9 0 0 0-7.43 7.42l-.4-.07a1 1 0 0 0-.31 1.98l.6.11a8.96 8.96 0 0 0 8.42 8.42q.08.3.12.61a1 1 0 0 0 1.98-.3l-.08-.41a9 9 0 0 0 7.43-7.42l.4.07a1 1 0 1 0 .31-1.98l-.61-.11a8.96 8.96 0 0 0-8.41-8.42q-.08-.3-.12-.61" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M19.54 12.13a1 1 0 0 1 1.2-.74q.43.1.85.16a1 1 0 0 1-.31 1.98q-.5-.08-1-.2a1 1 0 0 1-.74-1.2M11.38 20.75a1 1 0 1 1 1.95-.47q.12.5.2 1a1 1 0 0 1-1.98.31q-.06-.42-.17-.84M9.59 16.85a1 1 0 0 1 1.62-1.18q.3.42.56.85a1 1 0 0 1-1.7 1.05q-.22-.37-.48-.72M15.45 9.8a1 1 0 0 1 1.4-.21l.72.48a1 1 0 0 1-1.05 1.7l-.85-.57a1 1 0 0 1-.22-1.4M6.1 12.56a1 1 0 0 1 1.38-.33l.85.57a1 1 0 0 1-1.18 1.62l-.72-.49a1 1 0 0 1-.33-1.37M12.23 7.48a1 1 0 0 1 1.7-1.04q.23.36.48.71a1 1 0 0 1-1.62 1.18q-.3-.42-.56-.85M10.47 2.72a1 1 0 0 1 1.98-.31q.06.42.17.85a1 1 0 0 1-1.95.46q-.12-.5-.2-1M1.58 11.3a1 1 0 0 1 1.14-.83q.5.08 1 .2a1 1 0 1 1-.47 1.95q-.42-.1-.84-.17a1 1 0 0 1-.83-1.15" />
    </IconBase>
  ))
);

BaseballBoldDuotone.displayName = 'BaseballBoldDuotone';

// Triple export pattern (lucide-react style)
export { BaseballBoldDuotone, BaseballBoldDuotone as BaseballBoldDuotoneIcon, BaseballBoldDuotone as SiBaseballBoldDuotone };
export type { BaseballBoldDuotoneProps };
