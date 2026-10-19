import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.75 13.5c.37 0 .72.2.89.54.17.33.14.73-.07 1.04-1.03 1.45-2.68 2.42-4.57 2.42s-3.54-.97-4.57-2.42c-.21-.3-.24-.71-.07-1.04s.52-.54.89-.54zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteGrinBoldDuotone.displayName = 'EmoteGrinBoldDuotone';

// Triple export pattern
export { EmoteGrinBoldDuotone, EmoteGrinBoldDuotone as EmoteGrinBoldDuotoneIcon, EmoteGrinBoldDuotone as SiEmoteGrinBoldDuotone };
export default EmoteGrinBoldDuotone;
export type { EmoteGrinBoldDuotoneProps };
