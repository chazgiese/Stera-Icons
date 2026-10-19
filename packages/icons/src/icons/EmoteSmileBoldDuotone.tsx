import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 13.87c.35-.43.98-.5 1.4-.15.44.35.5.98.16 1.4-1.05 1.3-2.7 2.13-4.53 2.13s-3.48-.82-4.53-2.12c-.35-.43-.28-1.06.15-1.4.43-.36 1.06-.29 1.4.14.67.83 1.75 1.38 2.98 1.38s2.3-.55 2.97-1.38M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteSmileBoldDuotone.displayName = 'EmoteSmileBoldDuotone';

// Triple export pattern
export { EmoteSmileBoldDuotone, EmoteSmileBoldDuotone as EmoteSmileBoldDuotoneIcon, EmoteSmileBoldDuotone as SiEmoteSmileBoldDuotone };
export default EmoteSmileBoldDuotone;
export type { EmoteSmileBoldDuotoneProps };
