import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-duotone" {...props}>
      <path fill="currentColor" d="M18.34 17.28a8 8 0 0 1-1.06 1.06L5.66 6.72a8 8 0 0 1 1.06-1.06z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.83 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegularDuotone.displayName = 'CircleSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashRegularDuotone, CircleSlashRegularDuotone as CircleSlashRegularDuotoneIcon, CircleSlashRegularDuotone as SiCircleSlashRegularDuotone };
export default CircleSlashRegularDuotone;
export type { CircleSlashRegularDuotoneProps };
