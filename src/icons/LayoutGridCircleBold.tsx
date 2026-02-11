import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleBold = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-bold" {...props}>
      <path fillRule="evenodd" d="M6.88 12.75a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75M17.13 12.75a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75M6.88 2.5a4.37 4.37 0 1 1 0 8.75 4.37 4.37 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75M17.13 2.5a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleBold.displayName = 'LayoutGridCircleBold';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleBold, LayoutGridCircleBold as LayoutGridCircleBoldIcon, LayoutGridCircleBold as SiLayoutGridCircleBold };
export default LayoutGridCircleBold;
export type { LayoutGridCircleBoldProps };
