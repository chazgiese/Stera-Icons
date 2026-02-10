import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedBoldProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedBold = memo(
  forwardRef<SVGSVGElement, RectangleDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-dashed-bold" {...props}>
      <path fill="currentColor" d="M3 15a1 1 0 0 1 1 1 2.5 2.5 0 0 0 2.5 2.5 1 1 0 1 1 0 2A4.5 4.5 0 0 1 2 16a1 1 0 0 1 1-1M14.5 18.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM21 15a1 1 0 0 1 1 1 4.5 4.5 0 0 1-4.5 4.5 1 1 0 1 1 0-2A2.5 2.5 0 0 0 20 16a1 1 0 0 1 1-1M3 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M21 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M6.5 3.5a1 1 0 0 1 0 2A2.5 2.5 0 0 0 4 8a1 1 0 0 1-2 0 4.5 4.5 0 0 1 4.5-4.5M17.5 3.5A4.5 4.5 0 0 1 22 8a1 1 0 1 1-2 0 2.5 2.5 0 0 0-2.5-2.5 1 1 0 1 1 0-2M14.5 3.5a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

RectangleDashedBold.displayName = 'RectangleDashedBold';

// Triple export pattern (lucide-react style)
export { RectangleDashedBold, RectangleDashedBold as RectangleDashedBoldIcon, RectangleDashedBold as SiRectangleDashedBold };
export default RectangleDashedBold;
export type { RectangleDashedBoldProps };
