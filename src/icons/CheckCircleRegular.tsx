import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CheckCircleRegular = memo(
  forwardRef<SVGSVGElement, CheckCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle" {...props}>
      <path fill="currentColor" d="M16.47 8.47a.75.75 0 1 1 1.06 1.06l-6.35 6.35-.31.3q-.16.15-.48.26-.43.12-.84-.06c-.2-.08-.34-.22-.43-.33q-.15-.16-.27-.34L6.4 12.45a.75.75 0 0 1 1.2-.9l2.45 3.26q0 .02.03.05l.04-.04z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleRegular.displayName = 'CheckCircleRegular';

// Triple export pattern (lucide-react style)
export { CheckCircleRegular, CheckCircleRegular as CheckCircleRegularIcon, CheckCircleRegular as SiCheckCircleRegular };
export type { CheckCircleRegularProps };
