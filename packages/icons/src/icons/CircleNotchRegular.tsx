import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegular = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.19 4.75c.3-.29.77-.3 1.06 0 1.43 1.44 2.4 3.26 2.8 5.25s.2 4.05-.58 5.92-2.09 3.48-3.78 4.6c-1.68 1.13-3.66 1.73-5.69 1.73s-4-.6-5.7-1.73c-1.68-1.12-3-2.72-3.77-4.6-.78-1.87-.98-3.93-.58-5.92s1.37-3.81 2.8-5.25c.3-.3.77-.3 1.06 0s.3.77 0 1.06C4.6 7.04 3.76 8.6 3.41 10.3c-.33 1.7-.16 3.46.5 5.06.67 1.6 1.79 2.96 3.23 3.93 1.44.96 3.13 1.47 4.86 1.47s3.42-.51 4.86-1.47c1.44-.97 2.56-2.33 3.22-3.93s.84-3.36.5-5.06-1.17-3.25-2.4-4.48c-.29-.29-.29-.76 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegular.displayName = 'CircleNotchRegular';

// Triple export pattern
export { CircleNotchRegular, CircleNotchRegular as CircleNotchRegularIcon, CircleNotchRegular as SiCircleNotchRegular };
export default CircleNotchRegular;
export type { CircleNotchRegularProps };
