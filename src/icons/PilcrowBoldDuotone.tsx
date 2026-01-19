import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PilcrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pilcrow-bold-duotone" {...props}>
      <path d="M14 20a1 1 0 1 1-2 0V5h2zM18 20a1 1 0 1 1-2 0V5h2z" opacity={0.4} />
        <path fill="currentColor" d="M19 3a1 1 0 1 1 0 2h-9a4 4 0 1 0 0 8h2v2h-2a6 6 0 0 1 0-12z" />
    </IconBase>
  ))
);

PilcrowBoldDuotone.displayName = 'PilcrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { PilcrowBoldDuotone, PilcrowBoldDuotone as PilcrowBoldDuotoneIcon, PilcrowBoldDuotone as SiPilcrowBoldDuotone };
export type { PilcrowBoldDuotoneProps };
