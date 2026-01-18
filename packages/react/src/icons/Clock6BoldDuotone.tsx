import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock6BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock6BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock6BoldDuotone.displayName = 'Clock6BoldDuotone';

export { Clock6BoldDuotone };
export type { Clock6BoldDuotoneProps };
