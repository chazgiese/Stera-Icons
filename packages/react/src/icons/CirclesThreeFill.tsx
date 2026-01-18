import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclesThreeFillProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeFill = memo(
  forwardRef<SVGSVGElement, CirclesThreeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

CirclesThreeFill.displayName = 'CirclesThreeFill';

export { CirclesThreeFill };
export type { CirclesThreeFillProps };
