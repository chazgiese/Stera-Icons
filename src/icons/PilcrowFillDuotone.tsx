import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PilcrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowFillDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pilcrow-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 5v8h-2a4 4 0 0 1 0-8z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3a1 1 0 1 1 0 2h-1v15a1 1 0 1 1-2 0V5h-2v15a1 1 0 1 1-2 0v-5h-2a6 6 0 0 1 0-12zm-9 2a4 4 0 1 0 0 8h2V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowFillDuotone.displayName = 'PilcrowFillDuotone';

// Triple export pattern (lucide-react style)
export { PilcrowFillDuotone, PilcrowFillDuotone as PilcrowFillDuotoneIcon, PilcrowFillDuotone as SiPilcrowFillDuotone };
export type { PilcrowFillDuotoneProps };
