import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlienRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlienRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlienRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alien-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a8.84 8.84 0 0 1 8.75 8.93c0 2.13-1.07 4.05-2.37 5.6a22 22 0 0 1-4.1 3.67 3.9 3.9 0 0 1-4.55 0c-1.2-.85-2.8-2.12-4.11-3.67-1.3-1.55-2.37-3.47-2.37-5.6 0-4.92 3.9-8.93 8.75-8.93m0 1.5a7.34 7.34 0 0 0-7.25 7.43c0 1.63.83 3.21 2.02 4.63a20 20 0 0 0 3.82 3.4c.86.6 1.96.6 2.82 0 1.16-.8 2.64-1.98 3.82-3.4 1.2-1.42 2.02-3 2.02-4.63A7.34 7.34 0 0 0 12 3.75" clipRule="evenodd" opacity={.4} />
        <path d="M13.2 15.2c.4-.1.8.2.8.63 0 .4-.27.74-.65.83l-.86.22a2 2 0 0 1-.98 0l-.86-.22a.9.9 0 0 1-.65-.83c0-.42.4-.73.8-.63l.79.2q.41.09.82 0zM8 9a3 3 0 0 1 3 3 1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 0 1 1-1M16 9a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3" />
    </IconBase>
  ))
);

AlienRegularDuotone.displayName = 'AlienRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlienRegularDuotone, AlienRegularDuotone as AlienRegularDuotoneIcon, AlienRegularDuotone as SiAlienRegularDuotone };
export default AlienRegularDuotone;
export type { AlienRegularDuotoneProps };
