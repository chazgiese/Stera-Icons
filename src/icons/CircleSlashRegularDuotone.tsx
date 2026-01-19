import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-duotone" {...props}>
      <path d="M4.95 6.01A9.25 9.25 0 0 0 18 19.05l1.06 1.06A10.75 10.75 0 0 1 3.89 4.95zM12 1.25a10.75 10.75 0 0 1 8.11 17.8l-1.06-1.06A9.25 9.25 0 0 0 6 4.95L4.95 3.9A10.7 10.7 0 0 1 12 1.25" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3.89 4.95q.5-.57 1.06-1.06L20.1 19.05q-.5.57-1.06 1.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegularDuotone.displayName = 'CircleSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashRegularDuotone, CircleSlashRegularDuotone as CircleSlashRegularDuotoneIcon, CircleSlashRegularDuotone as SiCircleSlashRegularDuotone };
export type { CircleSlashRegularDuotoneProps };
