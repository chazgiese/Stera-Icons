import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCirclePlusBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusBold = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M17.5 13a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5H14a1 1 0 1 1 0-2h2.5V14a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusBold.displayName = 'LayoutGridCirclePlusBold';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusBold, LayoutGridCirclePlusBold as LayoutGridCirclePlusBoldIcon, LayoutGridCirclePlusBold as SiLayoutGridCirclePlusBold };
export type { LayoutGridCirclePlusBoldProps };
