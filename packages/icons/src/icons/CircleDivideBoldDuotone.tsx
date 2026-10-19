import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 1.55c5.33.5 9.5 4.99 9.5 10.45s-4.17 9.95-9.5 10.45v-2.01c4.22-.5 7.5-4.08 7.5-8.44S17.22 4.05 13 3.56z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.5q.5 0 1 .05v20.9q-.5.05-1 .05C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5m-1 2.06c-4.22.5-7.5 4.08-7.5 8.44s3.28 7.94 7.5 8.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBoldDuotone.displayName = 'CircleDivideBoldDuotone';

// Triple export pattern
export { CircleDivideBoldDuotone, CircleDivideBoldDuotone as CircleDivideBoldDuotoneIcon, CircleDivideBoldDuotone as SiCircleDivideBoldDuotone };
export default CircleDivideBoldDuotone;
export type { CircleDivideBoldDuotoneProps };
