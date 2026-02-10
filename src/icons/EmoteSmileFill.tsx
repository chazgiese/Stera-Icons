import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileFill = memo(
  forwardRef<SVGSVGElement, EmoteSmileFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-smile-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.38 11.72a1 1 0 0 0-1.4.15A3.8 3.8 0 0 1 12 15.25a3.8 3.8 0 0 1-2.97-1.38 1 1 0 0 0-1.56 1.26A5.8 5.8 0 0 0 12 17.25a5.8 5.8 0 0 0 4.53-2.12 1 1 0 0 0-.15-1.4M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSmileFill.displayName = 'EmoteSmileFill';

// Triple export pattern (lucide-react style)
export { EmoteSmileFill, EmoteSmileFill as EmoteSmileFillIcon, EmoteSmileFill as SiEmoteSmileFill };
export default EmoteSmileFill;
export type { EmoteSmileFillProps };
