import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomOrbitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitFillDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit-fill-duotone" {...props}>
      <path d="M17.05 19.45a1 1 0 0 1 1.12 1.66 11 11 0 0 1-1.38.8q-.03 0-.05.02l-.27.12-.21.1q-.06.01-.12.04-1.6.64-3.27.78h-.02a11 11 0 0 1-1.7 0h-.02q-1.66-.14-3.27-.78l-.13-.05-.19-.08q-.9-.4-1.71-.95a1 1 0 0 1 1.12-1.66q.25.18.52.33l.03.01q.33.19.66.35l.18.08.16.07.14.06a9 9 0 0 0 3.5.65 9 9 0 0 0 3.07-.6l.15-.05.17-.07.12-.05a9 9 0 0 0 .85-.44l.03-.01q.27-.15.52-.33M7.2 2.1a1 1 0 0 1 .87 1.8l-.55.29-.02.02-.6.37-.19.14-.13.1-.13.1-.16.12a9 9 0 0 0-2.1 2.49l-.05.08-.09.17a9 9 0 0 0-.99 3.15l-.01.12-.01.14Q3 11.6 3 12v.04q0 .3.02.61a1 1 0 1 1-2 .14q-.05-.79 0-1.57l.02-.13.02-.25.02-.18.03-.2.04-.29.01-.05q.3-1.7 1.07-3.18l.03-.06.22-.38.1-.17.1-.17.07-.12q.9-1.39 2.2-2.49l.07-.05.23-.19.1-.07.18-.14.17-.12.14-.1q.65-.43 1.36-.78M15.46 2.56a1 1 0 0 1 1.34-.46q.71.35 1.36.79l.14.1.17.11.52.4.05.05q1.32 1.1 2.22 2.5l.04.08.22.36.09.15q1.09 1.93 1.33 4.23l.01.14.02.21q.06.79 0 1.57a1 1 0 0 1-2-.14q.03-.3.03-.61V12a9 9 0 0 0-1.14-4.38l-.06-.12a9 9 0 0 0-2.27-2.6l-.1-.08q-.44-.33-.93-.61l-.03-.02-.54-.3a1 1 0 0 1-.47-1.33" opacity={0.4} />
        <path fill="currentColor" d="M2.59 15.7a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M19.36 16.25a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10M12 .5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitFillDuotone.displayName = 'AtomOrbitFillDuotone';

// Triple export pattern (lucide-react style)
export { AtomOrbitFillDuotone, AtomOrbitFillDuotone as AtomOrbitFillDuotoneIcon, AtomOrbitFillDuotone as SiAtomOrbitFillDuotone };
export type { AtomOrbitFillDuotoneProps };
