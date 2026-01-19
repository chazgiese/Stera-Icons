import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelRightFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-right-floating-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm13 3.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-3.5A1.5 1.5 0 0 1 13 16V8c0-.83.67-1.5 1.5-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingFill.displayName = 'PanelRightFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingFill, PanelRightFloatingFill as PanelRightFloatingFillIcon, PanelRightFloatingFill as SiPanelRightFloatingFill };
export default PanelRightFloatingFill;
export type { PanelRightFloatingFillProps };
