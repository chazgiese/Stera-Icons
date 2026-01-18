import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsLeftTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 5v3h12v2H9v9H7V5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopBoldDuotone.displayName = 'PanelsLeftTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { PanelsLeftTopBoldDuotone, PanelsLeftTopBoldDuotone as PanelsLeftTopBoldDuotoneIcon, PanelsLeftTopBoldDuotone as SiPanelsLeftTopBoldDuotone };
export type { PanelsLeftTopBoldDuotoneProps };
