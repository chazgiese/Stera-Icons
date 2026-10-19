import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.17 14.03c.26-.32.73-.37 1.05-.11s.37.73.11 1.05C15.33 16.21 13.76 17 12 17s-3.33-.79-4.33-2.03c-.26-.32-.21-.8.11-1.05.32-.26.8-.21 1.05.11.72.88 1.86 1.47 3.17 1.47s2.46-.59 3.17-1.47M9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.12 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.37-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

EmoteSmileRegularDuotone.displayName = 'EmoteSmileRegularDuotone';

// Triple export pattern
export { EmoteSmileRegularDuotone, EmoteSmileRegularDuotone as EmoteSmileRegularDuotoneIcon, EmoteSmileRegularDuotone as SiEmoteSmileRegularDuotone };
export default EmoteSmileRegularDuotone;
export type { EmoteSmileRegularDuotoneProps };
