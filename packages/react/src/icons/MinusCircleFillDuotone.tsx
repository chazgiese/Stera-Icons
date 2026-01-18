import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MinusCircleFillDuotone.displayName = 'MinusCircleFillDuotone';

export { MinusCircleFillDuotone };
export type { MinusCircleFillDuotoneProps };
