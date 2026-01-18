import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelTopFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM6.5 13a2 2 0 0 1-2-2V8.5c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.5 13a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2V11c0 1.1.9 2 2 2z" />
    </IconBase>
  ))
);

PanelTopFloatingFillDuotone.displayName = 'PanelTopFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelTopFloatingFillDuotone, PanelTopFloatingFillDuotone as PanelTopFloatingFillDuotoneIcon, PanelTopFloatingFillDuotone as SiPanelTopFloatingFillDuotone };
export type { PanelTopFloatingFillDuotoneProps };
