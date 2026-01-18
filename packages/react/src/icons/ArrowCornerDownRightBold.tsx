import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h12.59l-3.3 3.3a1 1 0 1 0 1.42 1.4l5-5 .06-.07.1-.13v-.01a1 1 0 0 0-.16-1.2l-5-5a1 1 0 1 0-1.42 1.42L18.6 14H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightBold.displayName = 'ArrowCornerDownRightBold';

export { ArrowCornerDownRightBold };
export type { ArrowCornerDownRightBoldProps };
