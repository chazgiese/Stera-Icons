import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusRegularProps = Omit<IconBaseProps, 'children'>;

const MinusRegular = memo(
  forwardRef<SVGSVGElement, MinusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus" {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MinusRegular.displayName = 'MinusRegular';

// Triple export pattern (lucide-react style)
export { MinusRegular, MinusRegular as MinusRegularIcon, MinusRegular as SiMinusRegular };
export default MinusRegular;
export type { MinusRegularProps };
