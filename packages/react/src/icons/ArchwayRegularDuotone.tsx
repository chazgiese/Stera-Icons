import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.65 21.65a3.7 3.7 0 0 1-2.65 1.1H7a3.7 3.7 0 0 1-2.65-1.1L5.4 20.6c.4.4.97.66 1.59.66h10c.62 0 1.18-.25 1.6-.66z" opacity={.4} />
        <path fill="currentColor" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9c0 1.04-.42 1.97-1.1 2.65L18.6 20.6c.4-.4.66-.97.66-1.59v-9a7.25 7.25 0 1 0-14.5 0v9c0 .62.25 1.18.66 1.6l-1.06 1.05A3.7 3.7 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25" />
    </IconBase>
  ))
);

ArchwayRegularDuotone.displayName = 'ArchwayRegularDuotone';

export { ArchwayRegularDuotone };
export type { ArchwayRegularDuotoneProps };
