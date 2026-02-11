import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusBold = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-plus-bold" {...props}>
      <path fillRule="evenodd" d="M6.88 12.75a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75" clipRule="evenodd" />
        <path d="M17.13 12.75a1 1 0 0 1 1 1v2.38h2.37a1 1 0 1 1 0 2h-2.37v2.37a1 1 0 1 1-2 0v-2.37h-2.38a1 1 0 1 1 0-2h2.38v-2.38a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M6.88 2.5a4.37 4.37 0 1 1 0 8.75 4.37 4.37 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75M17.13 2.5a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 2a2.37 2.37 0 1 0 0 4.75 2.37 2.37 0 0 0 0-4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusBold.displayName = 'LayoutGridCirclePlusBold';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusBold, LayoutGridCirclePlusBold as LayoutGridCirclePlusBoldIcon, LayoutGridCirclePlusBold as SiLayoutGridCirclePlusBold };
export default LayoutGridCirclePlusBold;
export type { LayoutGridCirclePlusBoldProps };
