import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelBottomFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6.5 11a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingFill.displayName = 'PanelBottomFloatingFill';

export { PanelBottomFloatingFill };
export type { PanelBottomFloatingFillProps };
