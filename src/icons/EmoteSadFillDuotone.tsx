import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 11.5c-1.21 0-2.34.33-3.27.9a1 1 0 1 0 1.04 1.7c.6-.37 1.38-.6 2.23-.6s1.62.23 2.23.6a1 1 0 1 0 1.04-1.7 6.3 6.3 0 0 0-3.27-.9M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.5c1.21 0 2.34.33 3.27.9a1 1 0 1 1-1.04 1.7c-.6-.37-1.38-.6-2.23-.6s-1.62.23-2.23.6a1 1 0 1 1-1.04-1.7c.93-.57 2.06-.9 3.27-.9M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSadFillDuotone.displayName = 'EmoteSadFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadFillDuotone, EmoteSadFillDuotone as EmoteSadFillDuotoneIcon, EmoteSadFillDuotone as SiEmoteSadFillDuotone };
export default EmoteSadFillDuotone;
export type { EmoteSadFillDuotoneProps };
