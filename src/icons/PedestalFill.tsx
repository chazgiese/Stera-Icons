import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PedestalFillProps = Omit<IconBaseProps, 'children'>;

const PedestalFill = memo(
  forwardRef<SVGSVGElement, PedestalFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.79 2q.18 0 .35.02c.23.02.5.06.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v1.8q0 .4-.02.74c-.02.23-.06.5-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2l-.32.02a3 3 0 0 1-1.84 3.83v.03q.02.34.02.74V21a1 1 0 0 1-1 1h-1.75v-7a1 1 0 1 0-2 0v7h-2.5v-7a1 1 0 1 0-2 0v7H7a1 1 0 0 1-1-1v-7.4q0-.4.02-.74v-.03A3 3 0 0 1 4.17 9q-.16 0-.3-.02-.36-.01-.78-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q2 6.8 2 6.4V4.6q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2Q4.2 2 4.6 2h15.19M7 9a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalFill.displayName = 'PedestalFill';

// Triple export pattern (lucide-react style)
export { PedestalFill, PedestalFill as PedestalFillIcon, PedestalFill as SiPedestalFill };
export type { PedestalFillProps };
