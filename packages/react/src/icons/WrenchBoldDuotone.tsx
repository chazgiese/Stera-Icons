import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WrenchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchBoldDuotone = memo(
  forwardRef<SVGSVGElement, WrenchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.57 11.28q.08.31.2.63a1 1 0 0 0 1.65.35H9.4L4.48 17.2a1.65 1.65 0 0 0 2.33 2.33l4.93-4.93.02-.02a1 1 0 0 0 .33 1.67l.63.2-4.5 4.5a3.64 3.64 0 0 1-5.15-5.16z" opacity={.4} />
        <path fill="currentColor" d="M9.46 4.15A7.3 7.3 0 0 1 16.3 2.2c1.25.28 1.43 1.75.69 2.5L14.26 7.4l.44 1.89 1.88.44 2.73-2.73.15-.13c.75-.57 2-.37 2.32.7l.03.12.1.45a7.34 7.34 0 0 1-9.82 8.09 1 1 0 0 1 .7-1.88 5.35 5.35 0 0 0 7.2-5.2l-2.39 2.39a1 1 0 0 1-.93.27l-3.03-.72a1 1 0 0 1-.74-.74l-.72-3.03a1 1 0 0 1 .27-.93l2.4-2.4a5.33 5.33 0 0 0-5.21 7.21 1 1 0 0 1-1.88.7 7.4 7.4 0 0 1 1.7-7.76" />
    </IconBase>
  ))
);

WrenchBoldDuotone.displayName = 'WrenchBoldDuotone';

// Triple export pattern (lucide-react style)
export { WrenchBoldDuotone, WrenchBoldDuotone as WrenchBoldDuotoneIcon, WrenchBoldDuotone as SiWrenchBoldDuotone };
export type { WrenchBoldDuotoneProps };
