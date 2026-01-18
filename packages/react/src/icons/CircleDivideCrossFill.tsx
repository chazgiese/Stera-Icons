import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideCrossFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFill = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11 22.95A11 11 0 0 1 1.05 13H11zM22.95 13A11 11 0 0 1 13 22.95V13zM11 11H1.05A11 11 0 0 1 11 1.05zM13 1.05A11 11 0 0 1 22.95 11H13z" />
    </IconBase>
  ))
);

CircleDivideCrossFill.displayName = 'CircleDivideCrossFill';

export { CircleDivideCrossFill };
export type { CircleDivideCrossFillProps };
