import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-duotone" {...props}>
      <path fill="currentColor" d="M14 11.25a.75.75 0 0 1 0 1.5H7.44l.22-.4a.8.8 0 0 0 0-.7l-.21-.4z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M2.25 4.86A2 2 0 0 1 4.9 2.1l16.2 8.1a2 2 0 0 1 0 3.58l-16.2 8.1a2 2 0 0 1-2.65-2.75L6.15 12zm1.98-1.4a.5.5 0 0 0-.66.68l4.09 7.5c.12.22.12.5 0 .72l-4.1 7.5c-.23.43.23.9.67.69l16.2-8.1a.5.5 0 0 0 0-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegularDuotone.displayName = 'SendHRegularDuotone';

// Triple export pattern (lucide-react style)
export { SendHRegularDuotone, SendHRegularDuotone as SendHRegularDuotoneIcon, SendHRegularDuotone as SiSendHRegularDuotone };
export default SendHRegularDuotone;
export type { SendHRegularDuotoneProps };
