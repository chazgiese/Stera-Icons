import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ForwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="forward-duotone" {...props}>
      <path fill="currentColor" d="M12.25 9.5c0 .39.3.7.67.75H13c-3.74 0-5.97.51-7.3 1.74-1 .91-1.6 2.33-1.83 4.57q.18-.19.38-.37A9.8 9.8 0 0 1 11 13.75h2a.75.75 0 0 0-.75.75v.75H11a8.3 8.3 0 0 0-5.75 2.06 8 8 0 0 0-1.56 2A.75.75 0 0 1 2.24 19c0-3.79.62-6.45 2.43-8.11 1.67-1.54 4.19-2.07 7.57-2.13z" opacity={.4} />
        <path fill="currentColor" d="M12.71 3.3c.28-.11.6-.04.82.17l8 8c.3.3.3.77 0 1.06l-8 8a.75.75 0 0 1-1.28-.53v-5.5a.75.75 0 0 1 1.5 0v3.69L19.94 12l-6.19-6.19V9.5a.75.75 0 1 1-1.5 0V4c0-.3.18-.58.46-.7" />
    </IconBase>
  ))
);

ForwardRegularDuotone.displayName = 'ForwardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ForwardRegularDuotone, ForwardRegularDuotone as ForwardRegularDuotoneIcon, ForwardRegularDuotone as SiForwardRegularDuotone };
export type { ForwardRegularDuotoneProps };
