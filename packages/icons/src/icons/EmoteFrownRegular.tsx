import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownRegular = memo(
  forwardRef<SVGSVGElement, EmoteFrownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.5c1.55 0 2.95.69 3.83 1.78.26.32.21.8-.1 1.05-.33.26-.8.21-1.06-.1C14.07 15.48 13.1 15 12 15s-2.07.5-2.67 1.22c-.26.32-.73.37-1.05.11s-.37-.73-.11-1.05c.88-1.1 2.28-1.78 3.83-1.78M9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownRegular.displayName = 'EmoteFrownRegular';

// Triple export pattern
export { EmoteFrownRegular, EmoteFrownRegular as EmoteFrownRegularIcon, EmoteFrownRegular as SiEmoteFrownRegular };
export default EmoteFrownRegular;
export type { EmoteFrownRegularProps };
