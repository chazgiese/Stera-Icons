import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightBottomBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomBold = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4zm14-2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2v14zm-4-5V5H5a2 2 0 0 0-2 2v7zm0 2H3v1c0 1.1.9 2 2 2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomBold.displayName = 'PanelsRightBottomBold';

export { PanelsRightBottomBold };
export type { PanelsRightBottomBoldProps };
