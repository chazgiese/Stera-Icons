import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-fill-duotone" {...props}>
      <path d="M3 10v7c0 1.1.9 2 2 2h10v-9z" opacity={.4} />
        <path fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2V5zm-4 5v9H5a2 2 0 0 1-2-2v-7zm0-2H3V7c0-1.1.9-2 2-2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopFillDuotone.displayName = 'PanelsRightTopFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightTopFillDuotone, PanelsRightTopFillDuotone as PanelsRightTopFillDuotoneIcon, PanelsRightTopFillDuotone as SiPanelsRightTopFillDuotone };
export default PanelsRightTopFillDuotone;
export type { PanelsRightTopFillDuotoneProps };
