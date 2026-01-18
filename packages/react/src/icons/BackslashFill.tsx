import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BackslashFillProps = Omit<IconBaseProps, 'children'>;

const BackslashFill = memo(
  forwardRef<SVGSVGElement, BackslashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.12 2a1.5 1.5 0 0 0-2.24 2l16 18a1.5 1.5 0 0 0 2.24-2z" />
    </IconBase>
  ))
);

BackslashFill.displayName = 'BackslashFill';

export { BackslashFill };
export type { BackslashFillProps };
