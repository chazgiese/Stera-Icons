import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MinusCircleRegular = memo(
  forwardRef<SVGSVGElement, MinusCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle" {...props}>
      <path fill="currentColor" d="M16 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleRegular.displayName = 'MinusCircleRegular';

// Triple export pattern (lucide-react style)
export { MinusCircleRegular, MinusCircleRegular as MinusCircleRegularIcon, MinusCircleRegular as SiMinusCircleRegular };
export default MinusCircleRegular;
export type { MinusCircleRegularProps };
