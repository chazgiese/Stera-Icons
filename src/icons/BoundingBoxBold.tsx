import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxBoldProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxBold = memo(
  forwardRef<SVGSVGElement, BoundingBoxBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-bold" {...props}>
      <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1 1v1h6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v6h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1V9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 19h2v-2H5zm12 0h2v-2h-2zM9 8a1 1 0 0 1-1 1H7v6h1a1 1 0 0 1 1 1v1h6v-1a1 1 0 0 1 1-1h1V9h-1a1 1 0 0 1-1-1V7H9zM5 7h2V5H5zm12 0h2V5h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxBold.displayName = 'BoundingBoxBold';

// Triple export pattern (lucide-react style)
export { BoundingBoxBold, BoundingBoxBold as BoundingBoxBoldIcon, BoundingBoxBold as SiBoundingBoxBold };
export default BoundingBoxBold;
export type { BoundingBoxBoldProps };
