import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBold = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-bold" {...props}>
      <path fill="currentColor" d="M16.3 8.3a1 1 0 1 1 1.4 1.4l-6.34 6.35q-.16.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.25-.1-.41-.27-.52-.39q-.16-.16-.28-.36L6.2 12.6a1 1 0 1 1 1.6-1.2l2.3 3.08z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleBold.displayName = 'CheckCircleBold';

// Triple export pattern (lucide-react style)
export { CheckCircleBold, CheckCircleBold as CheckCircleBoldIcon, CheckCircleBold as SiCheckCircleBold };
export default CheckCircleBold;
export type { CheckCircleBoldProps };
