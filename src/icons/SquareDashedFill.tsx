import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedFillProps = Omit<IconBaseProps, 'children'>;

const SquareDashedFill = memo(
  forwardRef<SVGSVGElement, SquareDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed-fill" {...props}>
      <path d="M4 16a1 1 0 0 1 1 1c0 1.1.9 2 2 2a1 1 0 1 1 0 2 4 4 0 0 1-4-4 1 1 0 0 1 1-1M13.5 19a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2zM20 16a1 1 0 0 1 1 1 4 4 0 0 1-4 4 1 1 0 0 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1M15.67 6.5c1 0 1.83.82 1.83 1.83v7.34c0 1-.82 1.83-1.83 1.83H8.33a1.83 1.83 0 0 1-1.83-1.83V8.33c0-1 .82-1.83 1.83-1.83zM4 9.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M20 9.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M7 3a1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4M17 3a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1 0-2M13.5 3a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

SquareDashedFill.displayName = 'SquareDashedFill';

// Triple export pattern (lucide-react style)
export { SquareDashedFill, SquareDashedFill as SquareDashedFillIcon, SquareDashedFill as SiSquareDashedFill };
export default SquareDashedFill;
export type { SquareDashedFillProps };
