import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldHalfBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfBold = memo(
  forwardRef<SVGSVGElement, ShieldHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.03 1h.03a1 1 0 0 1 .28.06h.01l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68-.02.01-.08.04h-.02a1 1 0 0 1-.66 0h-.02l-.08-.04h-.02l-1.36-.69A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3h.02l.03-.02h.04L12 1zM5 5.7v4.88a11 11 0 0 0 6 9.8V3.44zm8 14.68a11 11 0 0 0 6-9.8V5.7l-6-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfBold.displayName = 'ShieldHalfBold';

export { ShieldHalfBold };
export type { ShieldHalfBoldProps };
