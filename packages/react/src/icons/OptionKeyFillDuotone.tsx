import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OptionKeyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyFillDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 3.5a1.5 1.5 0 0 1 0 3h-6.5a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M9 3.5c.6 0 1.14.36 1.38.9l5.6 13.1H21a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1-1.38-.9L8.02 6.5H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

OptionKeyFillDuotone.displayName = 'OptionKeyFillDuotone';

export { OptionKeyFillDuotone };
export type { OptionKeyFillDuotoneProps };
