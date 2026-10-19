import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralBold = memo(
  forwardRef<SVGSVGElement, EmoteNeutralBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 14c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralBold.displayName = 'EmoteNeutralBold';

// Triple export pattern
export { EmoteNeutralBold, EmoteNeutralBold as EmoteNeutralBoldIcon, EmoteNeutralBold as SiEmoteNeutralBold };
export default EmoteNeutralBold;
export type { EmoteNeutralBoldProps };
