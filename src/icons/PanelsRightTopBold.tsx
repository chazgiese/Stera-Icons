import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightTopBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopBold = memo(
  forwardRef<SVGSVGElement, PanelsRightTopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2V5zm-4 5v9H5a2 2 0 0 1-2-2v-7zm0-2H3V7c0-1.1.9-2 2-2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopBold.displayName = 'PanelsRightTopBold';

// Triple export pattern (lucide-react style)
export { PanelsRightTopBold, PanelsRightTopBold as PanelsRightTopBoldIcon, PanelsRightTopBold as SiPanelsRightTopBold };
export type { PanelsRightTopBoldProps };
