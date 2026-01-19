import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PedestalRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalRegularDuotone = memo(
  forwardRef<SVGSVGElement, PedestalRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-duotone" {...props}>
      <path fill="currentColor" d="M19.45 8.75a2.74 2.74 0 0 1-1.8 3.92q.07.23.08.45.02.37.02.88v7a.75.75 0 0 1-1.5 0v-7l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01H9l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v7a.75.75 0 0 1-1.5 0v-7q0-.51.02-.88.01-.22.07-.45a2.75 2.75 0 0 1-1.79-3.92H7a1.25 1.25 0 1 0 0 2.5h10a1.25 1.25 0 1 0 0-2.5h2.45" opacity={.4} />
        <path fill="currentColor" d="M10.25 14.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.41.34-.75.75-.75M13.75 14.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M19 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V5q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM5 3.75l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h14l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L19 3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalRegularDuotone.displayName = 'PedestalRegularDuotone';

// Triple export pattern (lucide-react style)
export { PedestalRegularDuotone, PedestalRegularDuotone as PedestalRegularDuotoneIcon, PedestalRegularDuotone as SiPedestalRegularDuotone };
export type { PedestalRegularDuotoneProps };
