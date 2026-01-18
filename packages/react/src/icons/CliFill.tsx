import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliFillProps = Omit<IconBaseProps, 'children'>;

const CliFill = memo(
  forwardRef<SVGSVGElement, CliFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L7.88 12 1.94 6.06a1.5 1.5 0 0 1 0-2.12M22 17.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

CliFill.displayName = 'CliFill';

export { CliFill };
export type { CliFillProps };
