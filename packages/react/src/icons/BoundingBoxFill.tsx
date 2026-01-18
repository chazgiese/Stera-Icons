import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoundingBoxFillProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFill = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1V8H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 5a1 1 0 0 1-1 1H6v8h1a1 1 0 0 1 1 1v1h8v-1a1 1 0 0 1 1-1h1V8h-1a1 1 0 0 1-1-1V6H8z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxFill.displayName = 'BoundingBoxFill';

export { BoundingBoxFill };
export type { BoundingBoxFillProps };
