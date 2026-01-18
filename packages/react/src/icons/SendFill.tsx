import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendFillProps = Omit<IconBaseProps, 'children'>;

const SendFill = memo(
  forwardRef<SVGSVGElement, SendFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.18 2.11a2.14 2.14 0 0 1 2.7 2.71l-5.23 15.72c-.66 1.99-3.5 1.94-4.09-.08l-1.73-5.88 5.88-5.87a1 1 0 0 0-1.42-1.42l-5.87 5.88-5.88-1.73a2.14 2.14 0 0 1-.07-4.09z" />
    </IconBase>
  ))
);

SendFill.displayName = 'SendFill';

// Triple export pattern (lucide-react style)
export { SendFill, SendFill as SendFillIcon, SendFill as SiSendFill };
export type { SendFillProps };
