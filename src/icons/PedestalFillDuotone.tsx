import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PedestalFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalFillDuotone = memo(
  forwardRef<SVGSVGElement, PedestalFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-fill-duotone" {...props}>
      <path fill="currentColor" d="M19.82 8.98a3 3 0 0 1-1.87 3.86l.03.26q.03.4.02.9v5q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.29.03-.65.02v-7a1 1 0 1 0-2 0v7h-2.5v-7a1 1 0 1 0-2 0v7q-.36 0-.65-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q6 19.5 6 19v-5q0-.5.02-.9l.03-.26a3 3 0 0 1-1.87-3.86Q4.55 9 5 9h14q.45 0 .82-.02" opacity={.4} />
        <path fill="currentColor" d="M9.75 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M14.25 14a1 1 0 0 1 1 1v7h-2v-7a1 1 0 0 1 1-1M19 2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23Q19.5 9 19 9H5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 6.5 2 6V5q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 2 5 2z" />
    </IconBase>
  ))
);

PedestalFillDuotone.displayName = 'PedestalFillDuotone';

// Triple export pattern (lucide-react style)
export { PedestalFillDuotone, PedestalFillDuotone as PedestalFillDuotoneIcon, PedestalFillDuotone as SiPedestalFillDuotone };
export type { PedestalFillDuotoneProps };
