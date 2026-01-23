import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopFillProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopFill = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-top-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h2V5zm4 3h12V7a2 2 0 0 0-2-2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopFill.displayName = 'PanelsLeftTopFill';

// Triple export pattern (lucide-react style)
export { PanelsLeftTopFill, PanelsLeftTopFill as PanelsLeftTopFillIcon, PanelsLeftTopFill as SiPanelsLeftTopFill };
export default PanelsLeftTopFill;
export type { PanelsLeftTopFillProps };
