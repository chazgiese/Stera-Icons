import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliBoldProps = Omit<IconBaseProps, 'children'>;

const CliBold = memo(
  forwardRef<SVGSVGElement, CliBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L8.58 12l-6.3-6.3a1 1 0 0 1 0-1.4M22 18a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CliBold.displayName = 'CliBold';

export { CliBold };
export type { CliBoldProps };
