import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BaseballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m1.41 1.41a8 8 0 0 0-2.28 4.73l-.24-.04a1 1 0 0 0-.3 1.98l.56.1a8 8 0 0 0 6.8 6.81l.11.57a1 1 0 0 0 1.97-.31q0-.12-.04-.24a7.96 7.96 0 0 0 7.02-7.01l.24.04a1 1 0 0 0 .31-1.98l-.57-.1a7.96 7.96 0 0 0-6.8-6.81L13 3.5a1 1 0 0 0-1.98.31l.05.24c-1.73.2-3.41.96-4.74 2.28" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.6 11.6a1 1 0 0 1 1.2-.74q.34.08.7.13a1 1 0 0 1-.32 1.98q-.43-.07-.85-.17a1 1 0 0 1-.74-1.2M10.85 19.8a1 1 0 0 1 1.95-.47l.17.85a1 1 0 0 1-1.98.31zM9.38 16.6A1 1 0 1 1 11 15.44l.48.72a1 1 0 0 1-1.7 1.04q-.2-.3-.4-.58M15.21 9.6a1 1 0 0 1 1.4-.22l.59.4a1 1 0 0 1-1.05 1.7l-.72-.48a1 1 0 0 1-.22-1.4M6.47 12.85a1 1 0 0 1 1.38-.33l.72.48a1 1 0 0 1-1.18 1.62l-.59-.4a1 1 0 0 1-.33-1.37M12.52 7.85a1 1 0 0 1 1.7-1.04q.2.3.4.58A1 1 0 0 1 13 8.57zM11.04 3.82A1 1 0 0 1 13 3.51q.05.34.14.7a1 1 0 0 1-1.95.46q-.1-.42-.16-.85M2.68 11.86a1 1 0 0 1 1.14-.83q.43.07.85.17a1 1 0 0 1-.47 1.95q-.34-.08-.69-.14a1 1 0 0 1-.83-1.15" />
    </IconBase>
  ))
);

BaseballBoldDuotone.displayName = 'BaseballBoldDuotone';

// Triple export pattern (lucide-react style)
export { BaseballBoldDuotone, BaseballBoldDuotone as BaseballBoldDuotoneIcon, BaseballBoldDuotone as SiBaseballBoldDuotone };
export default BaseballBoldDuotone;
export type { BaseballBoldDuotoneProps };
