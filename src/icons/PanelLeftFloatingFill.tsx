import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelLeftFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6 6.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h3.5c.83 0 1.5-.67 1.5-1.5V8c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingFill.displayName = 'PanelLeftFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingFill, PanelLeftFloatingFill as PanelLeftFloatingFillIcon, PanelLeftFloatingFill as SiPanelLeftFloatingFill };
export type { PanelLeftFloatingFillProps };
