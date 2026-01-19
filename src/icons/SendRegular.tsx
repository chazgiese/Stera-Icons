import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendRegularProps = Omit<IconBaseProps, 'children'>;

const SendRegular = memo(
  forwardRef<SVGSVGElement, SendRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="send" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.26 2.35a1.9 1.9 0 0 1 2.4 2.4l-5.25 15.7a1.9 1.9 0 0 1-3.6-.06l-2.1-7.1-7.1-2.1a1.9 1.9 0 0 1-.06-3.6zm.97 1.92a.4.4 0 0 0-.5-.5L4.02 9.01a.4.4 0 0 0 .01.75l7.07 2.08 4.37-4.37a.75.75 0 0 1 1.06 1.06l-4.37 4.37 2.08 7.07c.11.37.63.38.75.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendRegular.displayName = 'SendRegular';

// Triple export pattern (lucide-react style)
export { SendRegular, SendRegular as SendRegularIcon, SendRegular as SiSendRegular };
export default SendRegular;
export type { SendRegularProps };
