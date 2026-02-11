import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-duotone" {...props}>
      <path d="M13 11.25a.75.75 0 0 1 0 1.5H7.9l.21-.4a.8.8 0 0 0 0-.7l-.21-.4z" opacity={.4} />
        <path fillRule="evenodd" d="M3.08 5.54a1.89 1.89 0 0 1 2.5-2.6l14.72 7.37a1.89 1.89 0 0 1 0 3.38L5.58 21.05a1.89 1.89 0 0 1-2.5-2.59L6.6 12zM4.9 4.29a.39.39 0 0 0-.52.53l3.72 6.82c.13.22.13.5 0 .72L4.4 19.18c-.18.33.18.7.52.53l14.72-7.36a.39.39 0 0 0 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegularDuotone.displayName = 'SendHRegularDuotone';

// Triple export pattern (lucide-react style)
export { SendHRegularDuotone, SendHRegularDuotone as SendHRegularDuotoneIcon, SendHRegularDuotone as SiSendHRegularDuotone };
export default SendHRegularDuotone;
export type { SendHRegularDuotoneProps };
