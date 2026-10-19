import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBold = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m-1 2.06c-4.22.5-7.5 4.08-7.5 8.44s3.28 7.94 7.5 8.44zm2 16.88c4.22-.5 7.5-4.08 7.5-8.44S17.22 4.05 13 3.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBold.displayName = 'CircleDivideBold';

// Triple export pattern
export { CircleDivideBold, CircleDivideBold as CircleDivideBoldIcon, CircleDivideBold as SiCircleDivideBold };
export default CircleDivideBold;
export type { CircleDivideBoldProps };
