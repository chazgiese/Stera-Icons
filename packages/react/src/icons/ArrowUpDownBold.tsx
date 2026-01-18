import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownBold = memo(
  forwardRef<SVGSVGElement, ArrowUpDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 .7.3l4.5 4.5a1 1 0 1 1-1.4 1.4L13 4.42V19.6l2.8-2.8a1 1 0 0 1 1.4 1.42l-4.5 4.5a1 1 0 0 1-1.33.07l-.08-.07-4.5-4.5a1 1 0 1 1 1.42-1.42L11 19.6V4.4l-2.8 2.8a1 1 0 1 1-1.4-1.42l4.5-4.5.07-.06A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownBold.displayName = 'ArrowUpDownBold';

export { ArrowUpDownBold };
export type { ArrowUpDownBoldProps };
