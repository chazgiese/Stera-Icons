import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBold = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.01 4.58c.4-.4 1.02-.4 1.42 0 1.46 1.46 2.46 3.33 2.87 5.37.4 2.04.2 4.15-.6 6.07s-2.14 3.56-3.87 4.71c-1.72 1.15-3.75 1.77-5.83 1.77s-4.1-.62-5.83-1.77-3.08-2.8-3.87-4.71c-.8-1.92-1-4.03-.6-6.07s1.4-3.9 2.88-5.37c.39-.4 1.02-.4 1.41 0 .39.39.39 1.02 0 1.4-1.19 1.2-2 2.71-2.33 4.36-.32 1.65-.16 3.36.49 4.91.64 1.56 1.73 2.88 3.13 3.82S10.32 20.5 12 20.5s3.33-.5 4.72-1.43c1.4-.94 2.49-2.26 3.13-3.82.65-1.55.82-3.26.49-4.9C20 8.68 19.2 7.17 18 5.98c-.39-.4-.39-1.02 0-1.41" />
    </IconBase>
  ))
);

CircleNotchBold.displayName = 'CircleNotchBold';

// Triple export pattern
export { CircleNotchBold, CircleNotchBold as CircleNotchBoldIcon, CircleNotchBold as SiCircleNotchBold };
export default CircleNotchBold;
export type { CircleNotchBoldProps };
