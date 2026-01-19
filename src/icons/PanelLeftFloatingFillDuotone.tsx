import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelLeftFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6.5 6.5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2H9a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

PanelLeftFloatingFillDuotone.displayName = 'PanelLeftFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingFillDuotone, PanelLeftFloatingFillDuotone as PanelLeftFloatingFillDuotoneIcon, PanelLeftFloatingFillDuotone as SiPanelLeftFloatingFillDuotone };
export type { PanelLeftFloatingFillDuotoneProps };
