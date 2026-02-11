import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CheckCircleRegular = memo(
  forwardRef<SVGSVGElement, CheckCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle" {...props}>
      <path d="M15.45 8.74a.75.75 0 1 1 1.1 1.02l-4.88 5.32-.3.31q-.15.17-.46.29-.42.13-.84-.02-.3-.14-.45-.3l-.28-.33-1.92-2.3a.75.75 0 0 1 1.16-.96l1.91 2.3.04.04.04-.04z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleRegular.displayName = 'CheckCircleRegular';

// Triple export pattern (lucide-react style)
export { CheckCircleRegular, CheckCircleRegular as CheckCircleRegularIcon, CheckCircleRegular as SiCheckCircleRegular };
export default CheckCircleRegular;
export type { CheckCircleRegularProps };
