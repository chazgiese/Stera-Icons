import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldProps = Omit<IconBaseProps, 'children'>;

const BaseballBold = memo(
  forwardRef<SVGSVGElement, BaseballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-bold" {...props}>
      <path fill="currentColor" d="M9.6 15.21a1 1 0 0 1 1.4.22l.48.72a1 1 0 1 1-1.7 1.04q-.2-.3-.4-.58a1 1 0 0 1 .23-1.4M15.21 9.6a1 1 0 0 1 1.4-.22l.59.4a1 1 0 0 1-1.05 1.7l-.72-.48a1 1 0 0 1-.22-1.4M6.47 12.85a1 1 0 0 1 1.38-.33l.72.48a1 1 0 0 1-1.18 1.62l-.59-.4a1 1 0 0 1-.33-1.37M12.52 7.85a1 1 0 0 1 1.7-1.04q.2.3.4.58A1 1 0 0 1 13 8.57z" />
        <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m1.41 1.41a8 8 0 0 0-2.28 4.73l.61.13a1 1 0 0 1-.47 1.95l-.12-.03a8 8 0 0 0 6.8 6.8l-.03-.12a1 1 0 0 1 1.95-.47q.07.3.12.61a7.96 7.96 0 0 0 7.02-7.01l-.61-.13a1 1 0 0 1 .47-1.94l.12.02a7.96 7.96 0 0 0-6.8-6.8l.03.12a1 1 0 0 1-1.95.47q-.08-.3-.12-.61c-1.73.2-3.41.96-4.74 2.28" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballBold.displayName = 'BaseballBold';

// Triple export pattern (lucide-react style)
export { BaseballBold, BaseballBold as BaseballBoldIcon, BaseballBold as SiBaseballBold };
export default BaseballBold;
export type { BaseballBoldProps };
