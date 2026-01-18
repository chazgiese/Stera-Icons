import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" />
        <path d="M11 13H4a1 1 0 1 1 0-2h7zM20 11a1 1 0 1 1 0 2h-7v-2z" />
    </IconBase>
  ))
);

PlusBoldDuotone.displayName = 'PlusBoldDuotone';

export { PlusBoldDuotone };
export type { PlusBoldDuotoneProps };
