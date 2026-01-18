import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightBottomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 19v-3H3v-2h12V5h2v14z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4zm14-2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomBoldDuotone.displayName = 'PanelsRightBottomBoldDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightBottomBoldDuotone, PanelsRightBottomBoldDuotone as PanelsRightBottomBoldDuotoneIcon, PanelsRightBottomBoldDuotone as SiPanelsRightBottomBoldDuotone };
export type { PanelsRightBottomBoldDuotoneProps };
