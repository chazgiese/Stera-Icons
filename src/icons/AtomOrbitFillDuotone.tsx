import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitFillDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit-fill-duotone" {...props}>
      <path d="M16.43 18.66a1 1 0 0 1 1.1 1.67 10 10 0 0 1-5.4 1.67h-.27a10 10 0 0 1-5.4-1.67 1 1 0 0 1 1.1-1.67l.43.26H8a8 8 0 0 0 7.09.46q.46-.2.91-.45h.01zM7.55 3.04a1 1 0 0 1 .9 1.8l-.43.22-.02.01-.22.13-.04.03A8 8 0 0 0 4 12v.02l.01.49a1 1 0 0 1-2 .12 10 10 0 0 1 1.26-5.51l.07-.13a10 10 0 0 1 2.8-3.1 10 10 0 0 1 1.41-.85M15.1 3.49a1 1 0 0 1 1.35-.45 10 10 0 0 1 3.97 3.57l.05.07.2.34.05.1.11.19.05.09a10 10 0 0 1 1.1 5.23 1 1 0 0 1-2-.12q.02-.26.02-.5V12a8 8 0 0 0-4-6.93l-.02-.01-.43-.23a1 1 0 0 1-.45-1.34" opacity={0.4} />
        <path d="M3.46 15.2a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M18.5 15.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M12 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitFillDuotone.displayName = 'AtomOrbitFillDuotone';

// Triple export pattern (lucide-react style)
export { AtomOrbitFillDuotone, AtomOrbitFillDuotone as AtomOrbitFillDuotoneIcon, AtomOrbitFillDuotone as SiAtomOrbitFillDuotone };
export default AtomOrbitFillDuotone;
export type { AtomOrbitFillDuotoneProps };
