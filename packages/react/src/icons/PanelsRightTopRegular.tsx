import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightTopRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopRegular = memo(
  forwardRef<SVGSVGElement, PanelsRightTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 3.25A3.75 3.75 0 0 0 1.25 7v10A3.75 3.75 0 0 0 5 20.75h14A3.75 3.75 0 0 0 22.75 17V7A3.75 3.75 0 0 0 19 3.25zm14 1.5c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25h-2.25V4.75zm-3.75 5v9.5H5c-1.24 0-2.25-1-2.25-2.25V9.75zm0-1.5H2.75V7c0-1.24 1-2.25 2.25-2.25h10.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopRegular.displayName = 'PanelsRightTopRegular';

// Triple export pattern (lucide-react style)
export { PanelsRightTopRegular, PanelsRightTopRegular as PanelsRightTopRegularIcon, PanelsRightTopRegular as SiPanelsRightTopRegular };
export type { PanelsRightTopRegularProps };
