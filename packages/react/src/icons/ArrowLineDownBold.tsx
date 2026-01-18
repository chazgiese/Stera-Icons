import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownBold = memo(
  forwardRef<SVGSVGElement, ArrowLineDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 2a1 1 0 0 1 1 1v11.59l5.3-5.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.42l5.3 5.3V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowLineDownBold.displayName = 'ArrowLineDownBold';

export { ArrowLineDownBold };
export type { ArrowLineDownBoldProps };
