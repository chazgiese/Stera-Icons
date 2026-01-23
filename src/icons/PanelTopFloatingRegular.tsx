import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingRegularProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingRegular = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-top-floating" {...props}>
      <path fill="currentColor" d="M17.5 13a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2V11c0 1.1.9 2 2 2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 20.75A3.75 3.75 0 0 0 22.75 17V7A3.75 3.75 0 0 0 19 3.25H5A3.75 3.75 0 0 0 1.25 7v10A3.75 3.75 0 0 0 5 20.75zm-14-1.5c-1.24 0-2.25-1-2.25-2.25V7c0-1.24 1-2.25 2.25-2.25h14c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingRegular.displayName = 'PanelTopFloatingRegular';

// Triple export pattern (lucide-react style)
export { PanelTopFloatingRegular, PanelTopFloatingRegular as PanelTopFloatingRegularIcon, PanelTopFloatingRegular as SiPanelTopFloatingRegular };
export default PanelTopFloatingRegular;
export type { PanelTopFloatingRegularProps };
