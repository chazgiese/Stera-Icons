import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-right-floating-bold" {...props}>
      <path fill="currentColor" d="M15 6.5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingBold.displayName = 'PanelRightFloatingBold';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingBold, PanelRightFloatingBold as PanelRightFloatingBoldIcon, PanelRightFloatingBold as SiPanelRightFloatingBold };
export default PanelRightFloatingBold;
export type { PanelRightFloatingBoldProps };
