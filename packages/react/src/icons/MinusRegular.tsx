import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusRegularProps = Omit<IconBaseProps, 'children'>;

const MinusRegular = memo(
  forwardRef<SVGSVGElement, MinusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MinusRegular.displayName = 'MinusRegular';

export { MinusRegular };
export type { MinusRegularProps };
