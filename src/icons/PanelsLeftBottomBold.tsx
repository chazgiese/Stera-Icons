import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsLeftBottomBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomBold = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-bottom-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2v14zm4-5V5h10a2 2 0 0 1 2 2v7zm0 2h12v1a2 2 0 0 1-2 2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomBold.displayName = 'PanelsLeftBottomBold';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomBold, PanelsLeftBottomBold as PanelsLeftBottomBoldIcon, PanelsLeftBottomBold as SiPanelsLeftBottomBold };
export default PanelsLeftBottomBold;
export type { PanelsLeftBottomBoldProps };
