import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoundingBoxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 20H8v-2h8zM20 16h-2V8h2zM6 16H4V8h2zM16 6H8V4h8z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2H4zM21 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2h-2zM7 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM4 6h2V4H4zM21 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 4h2V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxBoldDuotone.displayName = 'BoundingBoxBoldDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxBoldDuotone, BoundingBoxBoldDuotone as BoundingBoxBoldDuotoneIcon, BoundingBoxBoldDuotone as SiBoundingBoxBoldDuotone };
export type { BoundingBoxBoldDuotoneProps };
