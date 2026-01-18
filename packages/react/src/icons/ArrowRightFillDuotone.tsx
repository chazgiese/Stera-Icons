import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 13H5a1 1 0 1 1 0-2h7z" opacity={.4} />
        <path fill="currentColor" d="M12.62 5.08a1 1 0 0 1 1.09.21l6 6a1 1 0 0 1 0 1.42l-6 6A1 1 0 0 1 12 18V6a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowRightFillDuotone.displayName = 'ArrowRightFillDuotone';

export { ArrowRightFillDuotone };
export type { ArrowRightFillDuotoneProps };
