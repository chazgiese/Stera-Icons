import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-4.26 4.27-.16-.57-.05-.12a1 1 0 0 0-.63-.56l-.57-.16z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.18 2.11a2.14 2.14 0 0 1 2.7 2.71l-5.23 15.71c-.66 2-3.5 1.94-4.09-.07l-2.05-6.97-6.97-2.05a2.14 2.14 0 0 1-.07-4.1zm.63 1.9L4.1 9.25q-.07.02-.08.05L4 9.38q0 .07.03.1l.07.04 7.5 2.2a1 1 0 0 1 .63.56l.05.12 2.2 7.5q.03.07.05.07.01.03.09.03l.08-.02q.03-.01.05-.08L20 4.2v-.08l-.03-.07-.07-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendBoldDuotone.displayName = 'SendBoldDuotone';

// Triple export pattern (lucide-react style)
export { SendBoldDuotone, SendBoldDuotone as SendBoldDuotoneIcon, SendBoldDuotone as SiSendBoldDuotone };
export type { SendBoldDuotoneProps };
