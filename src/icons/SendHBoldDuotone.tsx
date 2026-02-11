import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-bold-duotone" {...props}>
      <path d="M13 11a1 1 0 1 1 0 2H8.05l.28-.52a1 1 0 0 0 0-.96L8.05 11z" opacity={.4} />
        <path fillRule="evenodd" d="M2.86 5.66c-1-1.84.96-3.87 2.83-2.93l14.72 7.36a2.14 2.14 0 0 1 0 3.82L5.7 21.27a2.14 2.14 0 0 1-2.83-2.93L6.3 12zM4.7 4.5l-.07.04-.05.08.02.08 3.72 6.82a1 1 0 0 1 0 .96L4.61 19.3l-.02.08q0 .03.05.08.03.04.07.04l.08-.01 14.73-7.37.06-.05.02-.07-.02-.07-.06-.05L4.79 4.5q-.06-.03-.08-.01" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHBoldDuotone.displayName = 'SendHBoldDuotone';

// Triple export pattern (lucide-react style)
export { SendHBoldDuotone, SendHBoldDuotone as SendHBoldDuotoneIcon, SendHBoldDuotone as SiSendHBoldDuotone };
export default SendHBoldDuotone;
export type { SendHBoldDuotoneProps };
