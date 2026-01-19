import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsRightBottomRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomRegular = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-bottom" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 20.75A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25h14A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75zm14-1.5c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25h-2.25v14.5zm-3.75-5v-9.5H5c-1.24 0-2.25 1-2.25 2.25v7.25zm0 1.5H2.75V17c0 1.24 1 2.25 2.25 2.25h10.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomRegular.displayName = 'PanelsRightBottomRegular';

// Triple export pattern (lucide-react style)
export { PanelsRightBottomRegular, PanelsRightBottomRegular as PanelsRightBottomRegularIcon, PanelsRightBottomRegular as SiPanelsRightBottomRegular };
export type { PanelsRightBottomRegularProps };
