import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFill = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.5 14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralFill.displayName = 'EmoteNeutralFill';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFill, EmoteNeutralFill as EmoteNeutralFillIcon, EmoteNeutralFill as SiEmoteNeutralFill };
export default EmoteNeutralFill;
export type { EmoteNeutralFillProps };
