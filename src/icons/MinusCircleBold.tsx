import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBold = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-bold" {...props}>
      <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleBold.displayName = 'MinusCircleBold';

// Triple export pattern (lucide-react style)
export { MinusCircleBold, MinusCircleBold as MinusCircleBoldIcon, MinusCircleBold as SiMinusCircleBold };
export default MinusCircleBold;
export type { MinusCircleBoldProps };
