import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayFillProps = Omit<IconBaseProps, 'children'>;

const ArchwayFill = memo(
  forwardRef<SVGSVGElement, ArchwayFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25" />
    </IconBase>
  ))
);

ArchwayFill.displayName = 'ArchwayFill';

export { ArchwayFill };
export type { ArchwayFillProps };
