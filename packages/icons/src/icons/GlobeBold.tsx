import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldProps = Omit<IconBaseProps, 'children'>;

const GlobeBold = memo(
  forwardRef<SVGSVGElement, GlobeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5M3.56 13c.4 3.44 2.86 6.25 6.12 7.18C8.23 17.99 7.42 15.5 7.26 13zm13.18 0c-.16 2.51-.97 5-2.42 7.18 3.26-.93 5.72-3.74 6.12-7.18zm-7.48 0c.2 2.48 1.1 4.92 2.74 6.97 1.63-2.05 2.54-4.49 2.74-6.97zm.42-9.18C6.42 4.75 3.96 7.56 3.56 11h3.7c.16-2.51.97-5 2.42-7.18m2.32.2C10.37 6.09 9.46 8.53 9.26 11h5.48c-.2-2.48-1.1-4.92-2.74-6.97m2.32-.2c1.45 2.19 2.26 4.67 2.42 7.18h3.7c-.4-3.44-2.86-6.25-6.12-7.18" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBold.displayName = 'GlobeBold';

// Triple export pattern
export { GlobeBold, GlobeBold as GlobeBoldIcon, GlobeBold as SiGlobeBold };
export default GlobeBold;
export type { GlobeBoldProps };
