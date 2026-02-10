import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVRegularProps = Omit<IconBaseProps, 'children'>;

const SendVRegular = memo(
  forwardRef<SVGSVGElement, SendVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.54 21.01a1.89 1.89 0 0 1-2.6-2.5L10.32 3.8a1.89 1.89 0 0 1 3.38 0l7.36 14.73a1.89 1.89 0 0 1-2.59 2.5L12 17.49zM4.29 19.2c-.17.33.2.69.53.5l6.43-3.5v-5.1a.75.75 0 0 1 1.5 0v5.1l6.43 3.5c.33.19.7-.17.53-.5L12.35 4.46a.39.39 0 0 0-.7 0z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVRegular.displayName = 'SendVRegular';

// Triple export pattern (lucide-react style)
export { SendVRegular, SendVRegular as SendVRegularIcon, SendVRegular as SiSendVRegular };
export default SendVRegular;
export type { SendVRegularProps };
