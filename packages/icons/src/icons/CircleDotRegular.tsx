import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDotRegular = memo(
  forwardRef<SVGSVGElement, CircleDotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9.75c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotRegular.displayName = 'CircleDotRegular';

// Triple export pattern
export { CircleDotRegular, CircleDotRegular as CircleDotRegularIcon, CircleDotRegular as SiCircleDotRegular };
export default CircleDotRegular;
export type { CircleDotRegularProps };
