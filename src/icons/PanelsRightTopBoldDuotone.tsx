import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 5v3H3v2h12v9h2V5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopBoldDuotone.displayName = 'PanelsRightTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightTopBoldDuotone, PanelsRightTopBoldDuotone as PanelsRightTopBoldDuotoneIcon, PanelsRightTopBoldDuotone as SiPanelsRightTopBoldDuotone };
export default PanelsRightTopBoldDuotone;
export type { PanelsRightTopBoldDuotoneProps };
