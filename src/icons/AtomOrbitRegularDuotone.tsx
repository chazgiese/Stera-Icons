import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit-duotone" {...props}>
      <path d="M16.57 18.87a.75.75 0 0 1 .83 1.25 10 10 0 0 1-4.67 1.6h-.02l-.55.03h-.32l-.55-.03h-.02a9.7 9.7 0 0 1-4.67-1.6.75.75 0 0 1 .83-1.25q.22.15.44.27a8.4 8.4 0 0 0 4.51 1.1 8 8 0 0 0 3.74-1.1q.23-.12.45-.27M7.67 3.26a.75.75 0 0 1 .66 1.35l-.45.24A8.4 8.4 0 0 0 4.8 7.98 8.3 8.3 0 0 0 3.75 12l.01.52a.75.75 0 0 1-1.5.1A10 10 0 0 1 3.2 7.8q0-.04.03-.08l.1-.2.06-.1.1-.18.25-.43.05-.08a9.7 9.7 0 0 1 3.88-3.48M15.33 3.6a.75.75 0 0 1 1-.34A9.7 9.7 0 0 1 20.37 7l.08.13.06.1.1.2.04.08a9.7 9.7 0 0 1 1.08 5.1.75.75 0 0 1-1.5-.09q.02-.25.02-.51V12a8.4 8.4 0 0 0-1.05-4.04 8.3 8.3 0 0 0-3.08-3.1v-.01l-.45-.24a.75.75 0 0 1-.34-1" opacity={0.4} />
        <path fill="currentColor" d="M3.46 15.2a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M18.5 15.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitRegularDuotone.displayName = 'AtomOrbitRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtomOrbitRegularDuotone, AtomOrbitRegularDuotone as AtomOrbitRegularDuotoneIcon, AtomOrbitRegularDuotone as SiAtomOrbitRegularDuotone };
export default AtomOrbitRegularDuotone;
export type { AtomOrbitRegularDuotoneProps };
