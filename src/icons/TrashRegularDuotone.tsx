import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrashRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-duotone" {...props}>
      <path fill="currentColor" d="M20.12 16.05a35 35 0 0 1-.2 2.53c-.1.68-.25 1.24-.54 1.76a4.8 4.8 0 0 1-2.06 1.93c-.53.26-1.1.37-1.79.43q-1 .06-2.54.05H11q-1.55.01-2.54-.05a5 5 0 0 1-1.79-.43 4.8 4.8 0 0 1-2.06-1.93 5 5 0 0 1-.53-1.76q-.13-.98-.21-2.53l-.59-9.3h1.5l.58 9.2c.07 1.07.12 1.83.2 2.42s.2.94.36 1.23q.5.87 1.4 1.32c.3.15.67.24 1.26.28.6.05 1.35.05 2.42.05H13c1.07 0 1.83 0 2.42-.05a3 3 0 0 0 1.25-.28q.91-.45 1.41-1.32c.16-.29.27-.65.36-1.23.08-.6.13-1.35.2-2.42l.57-9.2h1.5z" opacity={.4} />
        <path fill="currentColor" d="M9.27 10.25c.4-.02.77.29.8.7l.37 6a.75.75 0 0 1-1.5.1l-.38-6a.75.75 0 0 1 .7-.8M14.73 10.25c.42.03.73.38.7.8l-.37 6a.75.75 0 0 1-1.5-.1l.38-6a.75.75 0 0 1 .8-.7" />
        <path fill="currentColor" fillRule="evenodd" d="M13.44 1.25c1.26 0 2.36.86 2.67 2.08l.48 1.92H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h5.41l.48-1.92a2.75 2.75 0 0 1 2.67-2.08zm-2.88 1.5c-.57 0-1.07.4-1.21.95l-.39 1.55h6.08l-.39-1.55a1.25 1.25 0 0 0-1.21-.95z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashRegularDuotone.displayName = 'TrashRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrashRegularDuotone, TrashRegularDuotone as TrashRegularDuotoneIcon, TrashRegularDuotone as SiTrashRegularDuotone };
export default TrashRegularDuotone;
export type { TrashRegularDuotoneProps };
