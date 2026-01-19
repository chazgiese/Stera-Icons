import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelBottomFloatingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-bottom-floating-duotone" {...props}>
      <path fill="currentColor" d="M17.5 11a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingRegularDuotone.displayName = 'PanelBottomFloatingRegularDuotone';

// Triple export pattern (lucide-react style)
export { PanelBottomFloatingRegularDuotone, PanelBottomFloatingRegularDuotone as PanelBottomFloatingRegularDuotoneIcon, PanelBottomFloatingRegularDuotone as SiPanelBottomFloatingRegularDuotone };
export default PanelBottomFloatingRegularDuotone;
export type { PanelBottomFloatingRegularDuotoneProps };
