import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XBoldProps = Omit<IconBaseProps, 'children'>;

const XBold = memo(
  forwardRef<SVGSVGElement, XBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.3 4.3a1 1 0 0 1 1.4 1.4L13.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4L12 13.42l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 1 1 1.42-1.4L12 10.58z" />
    </IconBase>
  ))
);

XBold.displayName = 'XBold';

export { XBold };
export type { XBoldProps };
