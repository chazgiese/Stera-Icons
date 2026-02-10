import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinFillProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFill = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.25 13.5a1 1 0 0 0-.82 1.58A5.6 5.6 0 0 0 12 17.5c1.89 0 3.54-.97 4.57-2.42a1 1 0 0 0-.82-1.58zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinFill.displayName = 'EmoteGrinFill';

// Triple export pattern (lucide-react style)
export { EmoteGrinFill, EmoteGrinFill as EmoteGrinFillIcon, EmoteGrinFill as SiEmoteGrinFill };
export default EmoteGrinFill;
export type { EmoteGrinFillProps };
