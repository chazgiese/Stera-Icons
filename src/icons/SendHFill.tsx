import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendHFillProps = Omit<IconBaseProps, 'children'>;

const SendHFill = memo(
  forwardRef<SVGSVGElement, SendHFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-fill" {...props}>
      <path fill="currentColor" d="M2.03 4.98a2.25 2.25 0 0 1 2.98-3.1l16.2 8.1a2.25 2.25 0 0 1 0 4.03l-16.2 8.1a2.25 2.25 0 0 1-2.98-3.09L5.32 13H14a1 1 0 0 0 0-2H5.32z" />
    </IconBase>
  ))
);

SendHFill.displayName = 'SendHFill';

// Triple export pattern (lucide-react style)
export { SendHFill, SendHFill as SendHFillIcon, SendHFill as SiSendHFill };
export default SendHFill;
export type { SendHFillProps };
