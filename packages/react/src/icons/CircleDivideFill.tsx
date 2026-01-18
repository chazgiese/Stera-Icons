import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFill = memo(
  forwardRef<SVGSVGElement, CircleDivideFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11 22.95a11 11 0 0 1 0-21.9zM13 1.05a11 11 0 0 1 0 21.9z" />
    </IconBase>
  ))
);

CircleDivideFill.displayName = 'CircleDivideFill';

export { CircleDivideFill };
export type { CircleDivideFillProps };
