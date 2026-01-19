import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenBoldProps = Omit<IconBaseProps, 'children'>;

const PenBold = memo(
  forwardRef<SVGSVGElement, PenBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.25 1.62c1.05 0 2.15.37 2.96 1.17.8.8 1.17 1.9 1.17 2.96 0 1.05-.37 2.15-1.17 2.96L8.7 21.2a1 1 0 0 1-.61.28l-5 .5A1 1 0 0 1 2 20.9l.5-5 .04-.16a1 1 0 0 1 .25-.44L15.3 2.8c.8-.8 1.9-1.17 2.96-1.17M4.45 16.45l-.33 3.43 3.42-.34L17.08 10 14 6.9zm13.8-12.83c-.61 0-1.17.22-1.54.59L15.4 5.5l3.09 3.08 1.3-1.29c.36-.37.58-.93.58-1.54s-.22-1.17-.59-1.54a2.2 2.2 0 0 0-1.54-.59" clipRule="evenodd" />
    </IconBase>
  ))
);

PenBold.displayName = 'PenBold';

// Triple export pattern (lucide-react style)
export { PenBold, PenBold as PenBoldIcon, PenBold as SiPenBold };
export type { PenBoldProps };
