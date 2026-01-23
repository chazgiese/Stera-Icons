import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopRegular = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-top" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3.25A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h2.25V4.75zm3.75 5v9.5H19c1.24 0 2.25-1 2.25-2.25V9.75zm0-1.5h12.5V7c0-1.24-1-2.25-2.25-2.25H8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopRegular.displayName = 'PanelsLeftTopRegular';

// Triple export pattern (lucide-react style)
export { PanelsLeftTopRegular, PanelsLeftTopRegular as PanelsLeftTopRegularIcon, PanelsLeftTopRegular as SiPanelsLeftTopRegular };
export default PanelsLeftTopRegular;
export type { PanelsLeftTopRegularProps };
