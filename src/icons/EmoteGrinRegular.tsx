import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinRegular = memo(
  forwardRef<SVGSVGElement, EmoteGrinRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin" {...props}>
      <path d="M15.75 13.75a.75.75 0 0 1 .61 1.18A5.3 5.3 0 0 1 12 17.25c-1.8 0-3.38-.92-4.36-2.32a.75.75 0 0 1 .61-1.18zM9 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M15 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinRegular.displayName = 'EmoteGrinRegular';

// Triple export pattern (lucide-react style)
export { EmoteGrinRegular, EmoteGrinRegular as EmoteGrinRegularIcon, EmoteGrinRegular as SiEmoteGrinRegular };
export default EmoteGrinRegular;
export type { EmoteGrinRegularProps };
