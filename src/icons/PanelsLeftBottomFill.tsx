import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomFillProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomFill = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-bottom-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2v14zm4-3h12v1a2 2 0 0 1-2 2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomFill.displayName = 'PanelsLeftBottomFill';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomFill, PanelsLeftBottomFill as PanelsLeftBottomFillIcon, PanelsLeftBottomFill as SiPanelsLeftBottomFill };
export default PanelsLeftBottomFill;
export type { PanelsLeftBottomFillProps };
