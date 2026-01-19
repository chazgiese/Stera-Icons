import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBold = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-bold" {...props}>
      <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleBold.displayName = 'MinusCircleBold';

// Triple export pattern (lucide-react style)
export { MinusCircleBold, MinusCircleBold as MinusCircleBoldIcon, MinusCircleBold as SiMinusCircleBold };
export default MinusCircleBold;
export type { MinusCircleBoldProps };
