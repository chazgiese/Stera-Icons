import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendVRegularProps = Omit<IconBaseProps, 'children'>;

const SendVRegular = memo(
  forwardRef<SVGSVGElement, SendVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.21 2.9a2 2 0 0 1 3.58 0l8.1 16.2a2 2 0 0 1-2.75 2.65L12 17.85l-7.14 3.9A2 2 0 0 1 2.1 19.1zm2.24.67a.5.5 0 0 0-.9 0l-8.1 16.2a.5.5 0 0 0 .69.66l7.11-3.88V10a.75.75 0 0 1 1.5 0v6.55l7.11 3.88a.5.5 0 0 0 .69-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVRegular.displayName = 'SendVRegular';

// Triple export pattern (lucide-react style)
export { SendVRegular, SendVRegular as SendVRegularIcon, SendVRegular as SiSendVRegular };
export default SendVRegular;
export type { SendVRegularProps };
