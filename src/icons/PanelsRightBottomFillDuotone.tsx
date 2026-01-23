import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-bottom-fill-duotone" {...props}>
      <path fill="currentColor" d="M3 14V7c0-1.1.9-2 2-2h10v9z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4zm14-2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2v14zm-4-5V5H5a2 2 0 0 0-2 2v7zm0 2H3v1c0 1.1.9 2 2 2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomFillDuotone.displayName = 'PanelsRightBottomFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightBottomFillDuotone, PanelsRightBottomFillDuotone as PanelsRightBottomFillDuotoneIcon, PanelsRightBottomFillDuotone as SiPanelsRightBottomFillDuotone };
export default PanelsRightBottomFillDuotone;
export type { PanelsRightBottomFillDuotoneProps };
