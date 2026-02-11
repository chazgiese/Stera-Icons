import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-duotone" {...props}>
      <path fillRule="evenodd" d="M5.54 21.02a1.89 1.89 0 0 1-2.59-2.5l7.36-14.73a1.89 1.89 0 0 1 3.38 0l7.36 14.73a1.89 1.89 0 0 1-2.59 2.5L12 17.49zm-1.25-1.83c-.17.33.2.69.53.5l6.82-3.71c.22-.12.5-.12.72 0l6.82 3.72c.33.18.7-.18.53-.51L12.35 4.46a.39.39 0 0 0-.7 0z" clipRule="evenodd" />
        <path d="M11.25 11.1a.75.75 0 0 1 1.5 0v5.1l-.4-.22a.8.8 0 0 0-.7 0l-.4.21z" opacity={.4} />
    </IconBase>
  ))
);

SendVRegularDuotone.displayName = 'SendVRegularDuotone';

// Triple export pattern (lucide-react style)
export { SendVRegularDuotone, SendVRegularDuotone as SendVRegularDuotoneIcon, SendVRegularDuotone as SiSendVRegularDuotone };
export default SendVRegularDuotone;
export type { SendVRegularDuotoneProps };
