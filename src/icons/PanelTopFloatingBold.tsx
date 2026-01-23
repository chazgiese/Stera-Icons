import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-top-floating-bold" {...props}>
      <path fill="currentColor" d="M17.5 13a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2V11c0 1.1.9 2 2 2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingBold.displayName = 'PanelTopFloatingBold';

// Triple export pattern (lucide-react style)
export { PanelTopFloatingBold, PanelTopFloatingBold as PanelTopFloatingBoldIcon, PanelTopFloatingBold as SiPanelTopFloatingBold };
export default PanelTopFloatingBold;
export type { PanelTopFloatingBoldProps };
