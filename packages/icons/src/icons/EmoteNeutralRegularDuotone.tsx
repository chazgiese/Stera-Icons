import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

EmoteNeutralRegularDuotone.displayName = 'EmoteNeutralRegularDuotone';

// Triple export pattern
export { EmoteNeutralRegularDuotone, EmoteNeutralRegularDuotone as EmoteNeutralRegularDuotoneIcon, EmoteNeutralRegularDuotone as SiEmoteNeutralRegularDuotone };
export default EmoteNeutralRegularDuotone;
export type { EmoteNeutralRegularDuotoneProps };
