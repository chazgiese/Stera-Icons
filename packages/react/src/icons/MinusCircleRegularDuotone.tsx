import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MinusCircleRegularDuotone.displayName = 'MinusCircleRegularDuotone';

export { MinusCircleRegularDuotone };
export type { MinusCircleRegularDuotoneProps };
