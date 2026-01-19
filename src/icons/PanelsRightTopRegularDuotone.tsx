import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-duotone" {...props}>
      <path fill="currentColor" d="M16.75 19.25h-1.5v-9.5H2.75v-1.5h12.5v-3.5h1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopRegularDuotone.displayName = 'PanelsRightTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightTopRegularDuotone, PanelsRightTopRegularDuotone as PanelsRightTopRegularDuotoneIcon, PanelsRightTopRegularDuotone as SiPanelsRightTopRegularDuotone };
export type { PanelsRightTopRegularDuotoneProps };
