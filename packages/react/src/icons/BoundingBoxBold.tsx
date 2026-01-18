import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoundingBoxBoldProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxBold = memo(
  forwardRef<SVGSVGElement, BoundingBoxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1V8H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM4 20h2v-2H4zm14 0h2v-2h-2zM8 7a1 1 0 0 1-1 1H6v8h1a1 1 0 0 1 1 1v1h8v-1a1 1 0 0 1 1-1h1V8h-1a1 1 0 0 1-1-1V6H8zM4 6h2V4H4zm14 0h2V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxBold.displayName = 'BoundingBoxBold';

export { BoundingBoxBold };
export type { BoundingBoxBoldProps };
