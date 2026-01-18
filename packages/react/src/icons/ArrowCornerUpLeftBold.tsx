import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H5.41l3.3-3.3a1 1 0 1 0-1.42-1.4l-5 5-.06.07-.1.13v.01a1 1 0 0 0 .16 1.2l5 5a1 1 0 1 0 1.42-1.42L5.4 10H18a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBold.displayName = 'ArrowCornerUpLeftBold';

export { ArrowCornerUpLeftBold };
export type { ArrowCornerUpLeftBoldProps };
