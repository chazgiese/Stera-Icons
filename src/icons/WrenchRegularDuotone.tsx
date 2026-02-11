import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchRegularDuotone = memo(
  forwardRef<SVGSVGElement, WrenchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrench-duotone" {...props}>
      <path d="m7.84 11.35.16.47a.75.75 0 0 0 1.23.27L4.3 17.02a1.9 1.9 0 0 0 2.68 2.68l4.93-4.93a1 1 0 0 1-.17.27c-.14.39.05.82.44.96q.23.08.47.15l-4.6 4.6a3.4 3.4 0 0 1-4.8-4.8z" opacity={.4} />
        <path d="M9.63 4.33a7.1 7.1 0 0 1 6.61-1.9c1.04.23 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83.13-.11c.6-.46 1.59-.32 1.9.5l.05.18.09.43A7.1 7.1 0 0 1 12.18 16a.75.75 0 0 1 .52-1.4 5.6 5.6 0 0 0 7.5-6l-2.77 2.77a.8.8 0 0 1-.7.2l-3.03-.71a.8.8 0 0 1-.56-.56l-.71-3.03a.8.8 0 0 1 .2-.7L15.4 3.8a5.58 5.58 0 0 0-6 7.5.75.75 0 0 1-1.4.52 7.1 7.1 0 0 1 1.63-7.5" />
    </IconBase>
  ))
);

WrenchRegularDuotone.displayName = 'WrenchRegularDuotone';

// Triple export pattern (lucide-react style)
export { WrenchRegularDuotone, WrenchRegularDuotone as WrenchRegularDuotoneIcon, WrenchRegularDuotone as SiWrenchRegularDuotone };
export default WrenchRegularDuotone;
export type { WrenchRegularDuotoneProps };
