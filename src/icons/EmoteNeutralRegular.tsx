import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralRegular = memo(
  forwardRef<SVGSVGElement, EmoteNeutralRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral" {...props}>
      <path fill="currentColor" d="M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralRegular.displayName = 'EmoteNeutralRegular';

// Triple export pattern (lucide-react style)
export { EmoteNeutralRegular, EmoteNeutralRegular as EmoteNeutralRegularIcon, EmoteNeutralRegular as SiEmoteNeutralRegular };
export default EmoteNeutralRegular;
export type { EmoteNeutralRegularProps };
