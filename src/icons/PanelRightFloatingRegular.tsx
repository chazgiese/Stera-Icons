import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingRegularProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingRegular = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-right-floating" {...props}>
      <path fill="currentColor" d="M15 6.5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3.25A3.75 3.75 0 0 0 1.25 7v10A3.75 3.75 0 0 0 5 20.75h14A3.75 3.75 0 0 0 22.75 17V7A3.75 3.75 0 0 0 19 3.25zm14 1.5c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25H5c-1.24 0-2.25-1-2.25-2.25V7c0-1.24 1-2.25 2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingRegular.displayName = 'PanelRightFloatingRegular';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingRegular, PanelRightFloatingRegular as PanelRightFloatingRegularIcon, PanelRightFloatingRegular as SiPanelRightFloatingRegular };
export default PanelRightFloatingRegular;
export type { PanelRightFloatingRegularProps };
