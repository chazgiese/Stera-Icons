import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v11.59l-1 1-1-1V5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M18.3 11.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ArrowDownBoldDuotone.displayName = 'ArrowDownBoldDuotone';

export { ArrowDownBoldDuotone };
export type { ArrowDownBoldDuotoneProps };
