import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.68 6.51a1 1 0 0 0-1.42.06l-4.72 5.16-1.77-2.12a1 1 0 0 0-1.54 1.28l1.92 2.3.3.34c.1.11.28.27.53.36q.5.18 1 .03c.26-.09.44-.24.56-.34l.32-.33 4.88-5.32a1 1 0 0 0-.06-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.76 2.12z" />
    </IconBase>
  ))
);

CheckCircleFillDuotone.displayName = 'CheckCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckCircleFillDuotone, CheckCircleFillDuotone as CheckCircleFillDuotoneIcon, CheckCircleFillDuotone as SiCheckCircleFillDuotone };
export default CheckCircleFillDuotone;
export type { CheckCircleFillDuotoneProps };
