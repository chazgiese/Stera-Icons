import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.26 8.57c.38-.4 1-.43 1.42-.06.4.38.43 1 .06 1.42l-4.89 5.32q-.14.17-.31.33c-.12.1-.3.25-.55.34q-.51.16-1-.03c-.26-.1-.43-.25-.54-.36q-.16-.16-.3-.34l-1.92-2.3c-.35-.42-.3-1.06.13-1.4.42-.36 1.05-.3 1.4.12l1.77 2.12z" />
    </IconBase>
  ))
);

CheckCircleBoldDuotone.displayName = 'CheckCircleBoldDuotone';

// Triple export pattern
export { CheckCircleBoldDuotone, CheckCircleBoldDuotone as CheckCircleBoldDuotoneIcon, CheckCircleBoldDuotone as SiCheckCircleBoldDuotone };
export default CheckCircleBoldDuotone;
export type { CheckCircleBoldDuotoneProps };
