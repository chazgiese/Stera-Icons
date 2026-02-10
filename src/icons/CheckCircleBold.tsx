import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBold = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-bold" {...props}>
      <path fill="currentColor" d="M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.77 2.12z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleBold.displayName = 'CheckCircleBold';

// Triple export pattern (lucide-react style)
export { CheckCircleBold, CheckCircleBold as CheckCircleBoldIcon, CheckCircleBold as SiCheckCircleBold };
export default CheckCircleBold;
export type { CheckCircleBoldProps };
