import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFill = memo(
  forwardRef<SVGSVGElement, MinusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleFill.displayName = 'MinusCircleFill';

// Triple export pattern (lucide-react style)
export { MinusCircleFill, MinusCircleFill as MinusCircleFillIcon, MinusCircleFill as SiMinusCircleFill };
export default MinusCircleFill;
export type { MinusCircleFillProps };
