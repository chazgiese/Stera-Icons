import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-bottom-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 14V7a2 2 0 0 0-2-2H9v9z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2v14zm4-5V5h10a2 2 0 0 1 2 2v7zm0 2h12v1a2 2 0 0 1-2 2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomFillDuotone.displayName = 'PanelsLeftBottomFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomFillDuotone, PanelsLeftBottomFillDuotone as PanelsLeftBottomFillDuotoneIcon, PanelsLeftBottomFillDuotone as SiPanelsLeftBottomFillDuotone };
export default PanelsLeftBottomFillDuotone;
export type { PanelsLeftBottomFillDuotoneProps };
