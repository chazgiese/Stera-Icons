import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-bottom-floating-bold" {...props}>
      <path d="M17.5 11a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2z" />
        <path fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingBold.displayName = 'PanelBottomFloatingBold';

// Triple export pattern (lucide-react style)
export { PanelBottomFloatingBold, PanelBottomFloatingBold as PanelBottomFloatingBoldIcon, PanelBottomFloatingBold as SiPanelBottomFloatingBold };
export default PanelBottomFloatingBold;
export type { PanelBottomFloatingBoldProps };
