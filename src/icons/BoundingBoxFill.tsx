import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxFillProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFill = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-fill" {...props}>
      <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1 1v1h6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v6h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1V9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 5a1 1 0 0 1-1 1H7v6h1a1 1 0 0 1 1 1v1h6v-1a1 1 0 0 1 1-1h1V9h-1a1 1 0 0 1-1-1V7H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxFill.displayName = 'BoundingBoxFill';

// Triple export pattern (lucide-react style)
export { BoundingBoxFill, BoundingBoxFill as BoundingBoxFillIcon, BoundingBoxFill as SiBoundingBoxFill };
export default BoundingBoxFill;
export type { BoundingBoxFillProps };
