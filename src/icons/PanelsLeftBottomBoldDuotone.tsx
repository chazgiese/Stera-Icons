import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-bottom-bold-duotone" {...props}>
      <path d="M9 19v-3h12v-2H9V5H7v14z" opacity={.4} />
        <path fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomBoldDuotone.displayName = 'PanelsLeftBottomBoldDuotone';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomBoldDuotone, PanelsLeftBottomBoldDuotone as PanelsLeftBottomBoldDuotoneIcon, PanelsLeftBottomBoldDuotone as SiPanelsLeftBottomBoldDuotone };
export default PanelsLeftBottomBoldDuotone;
export type { PanelsLeftBottomBoldDuotoneProps };
