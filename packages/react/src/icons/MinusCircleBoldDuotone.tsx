import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MinusCircleBoldDuotone.displayName = 'MinusCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MinusCircleBoldDuotone, MinusCircleBoldDuotone as MinusCircleBoldDuotoneIcon, MinusCircleBoldDuotone as SiMinusCircleBoldDuotone };
export type { MinusCircleBoldDuotoneProps };
