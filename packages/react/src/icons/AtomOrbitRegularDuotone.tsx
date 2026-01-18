import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomOrbitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.2 19.66a.75.75 0 0 1 .83 1.24q-.64.43-1.33.77l-.14.06-.2.1a11 11 0 0 1-3.5.89h-.03l-.32.02h-1.02l-.33-.02a11 11 0 0 1-3.21-.76l-.1-.04-.2-.1-.24-.1-.11-.05q-.69-.34-1.33-.77a.75.75 0 0 1 .84-1.24q.26.18.54.34l.03.01q.49.28 1 .5l.16.07.17.07a9 9 0 0 0 2.86.59h.8600000000000001a9 9 0 0 0 2.88-.6l.14-.06a10 10 0 0 0 .88-.4l.3-.17zM7.3 2.32a.75.75 0 0 1 .66 1.35l-.56.3-.02.02a9.4 9.4 0 0 0-3.23 3.1l-.08.14-.08.14-.06.12A9 9 0 0 0 2.75 12v.03q0 .31.02.64a.75.75 0 0 1-1.5.1q-.04-.77 0-1.54l.02-.16.02-.19.03-.27.01-.08a11 11 0 0 1 1.57-4.28l.03-.06q.87-1.36 2.16-2.44l.09-.08.2-.16.09-.06.18-.14.2-.14.1-.07q.64-.44 1.34-.78M15.69 2.67a.75.75 0 0 1 1-.35q.7.34 1.33.78l.14.1.15.1.22.16.07.05q1.48 1.15 2.44 2.68l.04.06.13.2.1.19.08.13a11 11 0 0 1 1.34 6 .75.75 0 0 1-1.5-.1l.02-.64V12q0-.4-.04-.8l-.01-.17a10 10 0 0 0-1.13-3.54l-.06-.12a9 9 0 0 0-2.33-2.67l-.12-.1q-.44-.33-.93-.61l-.03-.02-.56-.3a.75.75 0 0 1-.35-1" />
        <path fill="currentColor" d="M2.59 15.7a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M19.36 16.25a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12 .5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitRegularDuotone.displayName = 'AtomOrbitRegularDuotone';

export { AtomOrbitRegularDuotone };
export type { AtomOrbitRegularDuotoneProps };
