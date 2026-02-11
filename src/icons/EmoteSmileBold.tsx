import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileBold = memo(
  forwardRef<SVGSVGElement, EmoteSmileBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-smile-bold" {...props}>
      <path d="M14.97 13.87a1 1 0 0 1 1.56 1.26A5.8 5.8 0 0 1 12 17.25a5.8 5.8 0 0 1-4.53-2.12 1 1 0 0 1 1.56-1.26A3.8 3.8 0 0 0 12 15.25a3.8 3.8 0 0 0 2.97-1.38M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSmileBold.displayName = 'EmoteSmileBold';

// Triple export pattern (lucide-react style)
export { EmoteSmileBold, EmoteSmileBold as EmoteSmileBoldIcon, EmoteSmileBold as SiEmoteSmileBold };
export default EmoteSmileBold;
export type { EmoteSmileBoldProps };
