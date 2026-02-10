import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.76 2.12z" />
    </IconBase>
  ))
);

CheckCircleBoldDuotone.displayName = 'CheckCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CheckCircleBoldDuotone, CheckCircleBoldDuotone as CheckCircleBoldDuotoneIcon, CheckCircleBoldDuotone as SiCheckCircleBoldDuotone };
export default CheckCircleBoldDuotone;
export type { CheckCircleBoldDuotoneProps };
