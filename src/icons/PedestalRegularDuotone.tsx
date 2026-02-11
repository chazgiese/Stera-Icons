import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalRegularDuotone = memo(
  forwardRef<SVGSVGElement, PedestalRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-duotone" {...props}>
      <path d="M10.25 15.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M13.75 15.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M19.43 9.71q.31.58.32 1.29A2.75 2.75 0 0 1 17 13.75H7a2.75 2.75 0 0 1-2.43-4.04q.38.05.93.04H7a1.25 1.25 0 1 0 0 2.5h10a1.25 1.25 0 1 0 0-2.5h1.5q.55.01.93-.04" opacity={0.4} />
        <path d="M6.25 13.64q.36.1.75.11h.75V20a.75.75 0 0 1-1.5 0zM17.75 20a.75.75 0 0 1-1.5 0v-6.25H17q.39 0 .75-.1z" />
        <path fillRule="evenodd" d="M19 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM5 4.75l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h14l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V6l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L19 4.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalRegularDuotone.displayName = 'PedestalRegularDuotone';

// Triple export pattern (lucide-react style)
export { PedestalRegularDuotone, PedestalRegularDuotone as PedestalRegularDuotoneIcon, PedestalRegularDuotone as SiPedestalRegularDuotone };
export default PedestalRegularDuotone;
export type { PedestalRegularDuotoneProps };
