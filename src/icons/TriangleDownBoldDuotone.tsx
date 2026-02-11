import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, TriangleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-bold-duotone" {...props}>
      <path d="M16.06 3q1.68-.02 2.74.06c.7.07 1.37.2 1.92.6a3.5 3.5 0 0 1 1.42 2.48c.08.68-.14 1.33-.44 1.97q-.46.95-1.31 2.4l-4.06 7.01q-.82 1.46-1.42 2.33c-.41.57-.87 1.08-1.49 1.36-.9.4-1.94.4-2.84 0a4 4 0 0 1-1.49-1.36q-.59-.87-1.42-2.33L3.61 10.5Q2.75 9.07 2.3 8.1c-.3-.63-.52-1.29-.45-1.96a3.5 3.5 0 0 1 1.43-2.47c.55-.4 1.22-.54 1.92-.6Q6.26 2.97 7.94 3a1 1 0 0 1 0 2c-1.16 0-1.96 0-2.55.06-.6.05-.83.15-.94.23a1.5 1.5 0 0 0-.6 1.05c-.02.13 0 .38.26.93.25.54.65 1.23 1.23 2.23l4.06 7.02c.58 1 .98 1.69 1.32 2.17.35.5.55.64.67.7.39.16.83.16 1.22 0 .12-.06.32-.2.66-.7.35-.48.75-1.17 1.33-2.17l4.06-7.02c.58-1 .98-1.7 1.23-2.23.25-.55.28-.8.27-.93a1.5 1.5 0 0 0-.61-1.05c-.11-.08-.34-.18-.94-.23S17.21 5 16.06 5a1 1 0 0 1 0-2" />
        <path d="M16.06 3a1 1 0 0 0 0 2H7.94a1 1 0 0 0 .1-2h-.1z" opacity={.4} />
    </IconBase>
  ))
);

TriangleDownBoldDuotone.displayName = 'TriangleDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { TriangleDownBoldDuotone, TriangleDownBoldDuotone as TriangleDownBoldDuotoneIcon, TriangleDownBoldDuotone as SiTriangleDownBoldDuotone };
export default TriangleDownBoldDuotone;
export type { TriangleDownBoldDuotoneProps };
