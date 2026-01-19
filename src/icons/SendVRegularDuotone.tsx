import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.21 2.9a2 2 0 0 1 3.58 0l8.1 16.2a2 2 0 0 1-2.75 2.65L12 17.85l-7.14 3.9A2 2 0 0 1 2.1 19.1zm2.24.67a.5.5 0 0 0-.9 0l-8.1 16.2a.5.5 0 0 0 .69.66l7.5-4.09.09-.04q.32-.11.63.04l7.5 4.1a.5.5 0 0 0 .69-.67z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 9.25c.41 0 .75.34.75.75v6.55l-.4-.2a.8.8 0 0 0-.62-.05l-.09.04-.39.21V10c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

SendVRegularDuotone.displayName = 'SendVRegularDuotone';

// Triple export pattern (lucide-react style)
export { SendVRegularDuotone, SendVRegularDuotone as SendVRegularDuotoneIcon, SendVRegularDuotone as SiSendVRegularDuotone };
export default SendVRegularDuotone;
export type { SendVRegularDuotoneProps };
