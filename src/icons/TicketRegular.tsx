import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketRegularProps = Omit<IconBaseProps, 'children'>;

const TicketRegular = memo(
  forwardRef<SVGSVGElement, TicketRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket" {...props}>
      <path d="M14 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M18.6 4.75q.6 0 1.05.02a2.25 2.25 0 0 1 1.86 1.2q.2.45.22.88.02.44.02 1.05v1.6c0 .41-.34.75-.75.75a1.75 1.75 0 0 0 0 3.5.75.75 0 0 1 .75.75v1.6q0 .6-.02 1.05c-.03.3-.08.59-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.4q-.6 0-1.05-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98 2 2 0 0 1-.23-.87q-.03-.44-.02-1.05v-1.6c0-.41.34-.75.75-.75a1.75 1.75 0 1 0 0-3.5.75.75 0 0 1-.75-.75V7.9q0-.6.02-1.05A2.25 2.25 0 0 1 3.47 5q.45-.2.88-.22.44-.02 1.05-.02zM5.4 6.25c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.03.29-.02.92v.94a3.25 3.25 0 0 1 0 6.32v.94q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h7.85V16a.75.75 0 0 1 1.5 0v1.75h3.85q.63 0 .92-.02.28-.02.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.03-.29.02-.92v-.94a3.25 3.25 0 0 1 0-6.32V7.9c0-.43 0-.71-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.03-.92-.02h-3.85V8a.75.75 0 0 1-1.5 0V6.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketRegular.displayName = 'TicketRegular';

// Triple export pattern (lucide-react style)
export { TicketRegular, TicketRegular as TicketRegularIcon, TicketRegular as SiTicketRegular };
export default TicketRegular;
export type { TicketRegularProps };
