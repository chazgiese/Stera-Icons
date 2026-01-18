import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, MinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2h-9v-2z" opacity={.4} />
        <path fill="currentColor" d="M12 13H3a1 1 0 1 1 0-2h9z" />
    </IconBase>
  ))
);

MinusBoldDuotone.displayName = 'MinusBoldDuotone';

export { MinusBoldDuotone };
export type { MinusBoldDuotoneProps };
