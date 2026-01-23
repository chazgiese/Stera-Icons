import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating-bold" {...props}>
      <path fill="currentColor" d="M9 6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingBold.displayName = 'PanelLeftFloatingBold';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingBold, PanelLeftFloatingBold as PanelLeftFloatingBoldIcon, PanelLeftFloatingBold as SiPanelLeftFloatingBold };
export default PanelLeftFloatingBold;
export type { PanelLeftFloatingBoldProps };
