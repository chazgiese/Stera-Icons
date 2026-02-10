import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalRegularProps = Omit<IconBaseProps, 'children'>;

const PedestalRegular = memo(
  forwardRef<SVGSVGElement, PedestalRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2l-.43.02a2.73 2.73 0 0 1-1.8 3.92q.07.23.08.45.02.37.02.88v5a.75.75 0 0 1-1.5 0v-5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01H9l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5a.75.75 0 0 1-1.5 0v-5q0-.51.02-.88.01-.22.07-.45a2.75 2.75 0 0 1-1.79-3.92q-.24 0-.43-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM7 9.75a1.25 1.25 0 1 0 0 2.5h10a1.25 1.25 0 1 0 0-2.5zm-2-5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h14l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V6l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L19 4.75z" clipRule="evenodd" />
        <path fill="currentColor" d="M10.25 15.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M13.75 15.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PedestalRegular.displayName = 'PedestalRegular';

// Triple export pattern (lucide-react style)
export { PedestalRegular, PedestalRegular as PedestalRegularIcon, PedestalRegular as SiPedestalRegular };
export default PedestalRegular;
export type { PedestalRegularProps };
