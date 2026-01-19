import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelTopFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-top-floating-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM6.5 13a2 2 0 0 1-2-2V8.5c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingFill.displayName = 'PanelTopFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelTopFloatingFill, PanelTopFloatingFill as PanelTopFloatingFillIcon, PanelTopFloatingFill as SiPanelTopFloatingFill };
export default PanelTopFloatingFill;
export type { PanelTopFloatingFillProps };
