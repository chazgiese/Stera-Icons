import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitFillProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitFill = memo(
  forwardRef<SVGSVGElement, AtomOrbitFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit-fill" {...props}>
      <path fill="currentColor" d="M16.43 18.66a1 1 0 0 1 1.1 1.67A10 10 0 0 1 12 22h-.12a10 10 0 0 1-3.9-.85l-.32-.14a10 10 0 0 1-1.2-.68 1 1 0 0 1 1.1-1.67q.21.15.42.26H8a8 8 0 0 0 4.61 1.06A8 8 0 0 0 16 18.93h.01zM3.46 15.2a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M18.5 15.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M7.55 3.04a1 1 0 0 1 .9 1.8L8 5.06H8l-.2.13q-.04 0-.06.03A8 8 0 0 0 4 12v.02l.01.49a1 1 0 0 1-2 .12 10 10 0 0 1 1.26-5.51l.08-.14.05-.08a10 10 0 0 1 4.15-3.86M15.1 3.49a1 1 0 0 1 1.35-.45 10 10 0 0 1 3.97 3.57l.05.07.1.17.08.13.08.14.1.19.05.09a10 10 0 0 1 1.1 5.23 1 1 0 0 1-2-.12q.02-.26.02-.5V12a8 8 0 0 0-.9-3.68A8 8 0 0 0 16 5.07l-.45-.24a1 1 0 0 1-.45-1.34M12 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitFill.displayName = 'AtomOrbitFill';

// Triple export pattern (lucide-react style)
export { AtomOrbitFill, AtomOrbitFill as AtomOrbitFillIcon, AtomOrbitFill as SiAtomOrbitFill };
export default AtomOrbitFill;
export type { AtomOrbitFillProps };
