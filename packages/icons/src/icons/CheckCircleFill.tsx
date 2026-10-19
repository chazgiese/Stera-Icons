import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFill = memo(
  forwardRef<SVGSVGElement, CheckCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.6 6.86c-.37-.33-.92-.3-1.24.05l-4.83 5.26-1.86-2.23c-.3-.37-.86-.42-1.23-.11-.37.3-.42.86-.11 1.23l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02.35-.14.5-.31l.31-.32 4.88-5.33c.33-.36.3-.9-.05-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleFill.displayName = 'CheckCircleFill';

// Triple export pattern
export { CheckCircleFill, CheckCircleFill as CheckCircleFillIcon, CheckCircleFill as SiCheckCircleFill };
export default CheckCircleFill;
export type { CheckCircleFillProps };
