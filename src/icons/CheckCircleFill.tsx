import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFill = memo(
  forwardRef<SVGSVGElement, CheckCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.68 6.51a1 1 0 0 0-1.42.06l-4.72 5.16-1.77-2.12a1 1 0 0 0-1.54 1.28l1.92 2.3.3.34c.1.11.28.27.53.36q.5.18 1 .03c.26-.09.44-.24.56-.34l.32-.33 4.88-5.32a1 1 0 0 0-.06-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleFill.displayName = 'CheckCircleFill';

// Triple export pattern (lucide-react style)
export { CheckCircleFill, CheckCircleFill as CheckCircleFillIcon, CheckCircleFill as SiCheckCircleFill };
export default CheckCircleFill;
export type { CheckCircleFillProps };
