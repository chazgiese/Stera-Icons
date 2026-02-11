import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.5c1.21 0 2.34.33 3.27.9a1 1 0 1 1-1.04 1.7c-.6-.37-1.38-.6-2.23-.6s-1.62.23-2.23.6a1 1 0 1 1-1.04-1.7c.93-.57 2.06-.9 3.27-.9M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSadBoldDuotone.displayName = 'EmoteSadBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadBoldDuotone, EmoteSadBoldDuotone as EmoteSadBoldDuotoneIcon, EmoteSadBoldDuotone as SiEmoteSadBoldDuotone };
export default EmoteSadBoldDuotone;
export type { EmoteSadBoldDuotoneProps };
