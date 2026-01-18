import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelBottomFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6.5 11a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.5 11a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

PanelBottomFloatingFillDuotone.displayName = 'PanelBottomFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelBottomFloatingFillDuotone, PanelBottomFloatingFillDuotone as PanelBottomFloatingFillDuotoneIcon, PanelBottomFloatingFillDuotone as SiPanelBottomFloatingFillDuotone };
export type { PanelBottomFloatingFillDuotoneProps };
