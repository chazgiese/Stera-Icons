import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelLeftFloatingRegularProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingRegular = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating" {...props}>
      <path fill="currentColor" d="M9 6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingRegular.displayName = 'PanelLeftFloatingRegular';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingRegular, PanelLeftFloatingRegular as PanelLeftFloatingRegularIcon, PanelLeftFloatingRegular as SiPanelLeftFloatingRegular };
export default PanelLeftFloatingRegular;
export type { PanelLeftFloatingRegularProps };
