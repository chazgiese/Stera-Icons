import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m5.7 7.3a1 1 0 0 0-1.4 0l-6.2 6.18-2.3-3.08a1 1 0 0 0-1.6 1.2l2.45 3.26q.13.19.28.36c.1.12.27.28.52.4q.5.2 1 .06.4-.12.58-.31l.33-.32 6.35-6.34a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.3 8.3a1 1 0 0 1 1.4 1.4l-6.34 6.35q-.16.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.25-.1-.41-.27-.52-.39q-.16-.16-.28-.36L6.2 12.6a1 1 0 1 1 1.6-1.2l2.3 3.08z" />
    </IconBase>
  ))
);

CheckCircleFillDuotone.displayName = 'CheckCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckCircleFillDuotone, CheckCircleFillDuotone as CheckCircleFillDuotoneIcon, CheckCircleFillDuotone as SiCheckCircleFillDuotone };
export default CheckCircleFillDuotone;
export type { CheckCircleFillDuotoneProps };
