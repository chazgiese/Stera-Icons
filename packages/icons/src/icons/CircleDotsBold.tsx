import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotsBold = memo(
  forwardRef<SVGSVGElement, CircleDotsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.5c1.1 0 2 .9 2 2s-.89 2-2 2-2-.9-2-2 .9-2 2-2M3.87 17.3c.78-.78 2.04-.78 2.82 0 .8.79.8 2.05.01 2.83-.78.79-2.05.79-2.83 0-.79-.78-.79-2.05 0-2.83M17.3 17.3c.79-.78 2.05-.78 2.83 0s.79 2.05 0 2.83c-.78.79-2.05.79-2.83 0-.78-.78-.78-2.04 0-2.82M2.5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2M21.5 10c1.1 0 2 .89 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M3.87 3.86c.78-.78 2.05-.78 2.83 0 .78.79.78 2.05 0 2.83-.79.8-2.05.8-2.83.01-.79-.78-.79-2.05 0-2.83M17.3 3.87c.78-.79 2.05-.79 2.83 0 .79.78.79 2.05 0 2.83-.78.78-2.04.78-2.82 0-.8-.79-.8-2.05-.01-2.83M12 .5c1.11 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .89-2 2-2" />
    </IconBase>
  ))
);

CircleDotsBold.displayName = 'CircleDotsBold';

// Triple export pattern
export { CircleDotsBold, CircleDotsBold as CircleDotsBoldIcon, CircleDotsBold as SiCircleDotsBold };
export default CircleDotsBold;
export type { CircleDotsBoldProps };
