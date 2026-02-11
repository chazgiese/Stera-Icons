import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-right-floating-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm12.5 3.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2z" clipRule="evenodd" opacity={.4} />
        <path d="M15 6.5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" />
    </IconBase>
  ))
);

PanelRightFloatingFillDuotone.displayName = 'PanelRightFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingFillDuotone, PanelRightFloatingFillDuotone as PanelRightFloatingFillDuotoneIcon, PanelRightFloatingFillDuotone as SiPanelRightFloatingFillDuotone };
export default PanelRightFloatingFillDuotone;
export type { PanelRightFloatingFillDuotoneProps };
