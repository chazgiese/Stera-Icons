import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExclamationPointFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointFillDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 17.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" opacity={.4} />
        <path fill="currentColor" d="M12 2c.49 0 .95.18 1.28.51s.5.78.47 1.24l-.03.54-.44 9.67-.03.54q-.04.5-.4.84-.36.35-.85.35t-.86-.35a1.3 1.3 0 0 1-.39-.84l-.02-.54-.45-9.67-.03-.54c-.02-.46.14-.9.47-1.24S11.52 2 12 2" />
    </IconBase>
  ))
);

ExclamationPointFillDuotone.displayName = 'ExclamationPointFillDuotone';

export { ExclamationPointFillDuotone };
export type { ExclamationPointFillDuotoneProps };
