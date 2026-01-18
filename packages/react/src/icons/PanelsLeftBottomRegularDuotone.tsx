import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsLeftBottomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.75 14.25h12.5v1.5H8.75v3.5h-1.5V4.75h1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomRegularDuotone.displayName = 'PanelsLeftBottomRegularDuotone';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomRegularDuotone, PanelsLeftBottomRegularDuotone as PanelsLeftBottomRegularDuotoneIcon, PanelsLeftBottomRegularDuotone as SiPanelsLeftBottomRegularDuotone };
export type { PanelsLeftBottomRegularDuotoneProps };
