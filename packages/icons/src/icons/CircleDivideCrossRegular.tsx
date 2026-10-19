import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-8.72 11c.36 4.23 3.74 7.6 7.97 7.97v-7.97zm9.47 0v7.97c4.23-.36 7.6-3.74 7.97-7.97zm0-1.5h7.97c-.36-4.23-3.74-7.6-7.97-7.97zm-1.5-7.97c-4.23.36-7.6 3.74-7.97 7.97h7.97z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegular.displayName = 'CircleDivideCrossRegular';

// Triple export pattern
export { CircleDivideCrossRegular, CircleDivideCrossRegular as CircleDivideCrossRegularIcon, CircleDivideCrossRegular as SiCircleDivideCrossRegular };
export default CircleDivideCrossRegular;
export type { CircleDivideCrossRegularProps };
