import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleBold = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleBold.displayName = 'LayoutGridCircleBold';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleBold, LayoutGridCircleBold as LayoutGridCircleBoldIcon, LayoutGridCircleBold as SiLayoutGridCircleBold };
export default LayoutGridCircleBold;
export type { LayoutGridCircleBoldProps };
