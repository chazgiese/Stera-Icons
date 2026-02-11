import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitRegularProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitRegular = memo(
  forwardRef<SVGSVGElement, AtomOrbitRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit" {...props}>
      <path d="M16.57 18.87a.75.75 0 0 1 .83 1.25 10 10 0 0 1-4.67 1.6h-.02l-.6.03H12l-.71-.03h-.02a9.7 9.7 0 0 1-4.67-1.6.75.75 0 0 1 .83-1.25q.2.14.43.27h.01a8.3 8.3 0 0 0 8.25 0h.02zM3.46 15.2a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M18.5 15.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5" />
        <path fillRule="evenodd" d="M12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path d="M7.67 3.26a.75.75 0 0 1 .66 1.35l-.45.24a8.3 8.3 0 0 0-3.21 3.37A8 8 0 0 0 3.75 12l.01.52a.75.75 0 0 1-1.5.1A10 10 0 0 1 3.2 7.8q0-.04.03-.07l.26-.5.06-.11.1-.17.09-.14.05-.08a9.7 9.7 0 0 1 3.88-3.48M15.33 3.6a.75.75 0 0 1 1-.34 9.7 9.7 0 0 1 4.05 3.76l.07.1a10 10 0 0 1 1.2 3.5q.15.98.08 2a.75.75 0 0 1-1.5-.1q.02-.25.02-.51V12a8.4 8.4 0 0 0-.93-3.81 8.3 8.3 0 0 0-3.2-3.33v-.01l-.45-.24a.75.75 0 0 1-.34-1M12 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitRegular.displayName = 'AtomOrbitRegular';

// Triple export pattern (lucide-react style)
export { AtomOrbitRegular, AtomOrbitRegular as AtomOrbitRegularIcon, AtomOrbitRegular as SiAtomOrbitRegular };
export default AtomOrbitRegular;
export type { AtomOrbitRegularProps };
