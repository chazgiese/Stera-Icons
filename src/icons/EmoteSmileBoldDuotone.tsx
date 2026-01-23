import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-smile-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.4 14.2a1 1 0 0 1 1.4.2 4 4 0 0 0 6.4 0 1 1 0 0 1 1.6 1.2 6 6 0 0 1-9.6 0 1 1 0 0 1 .2-1.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSmileBoldDuotone.displayName = 'EmoteSmileBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSmileBoldDuotone, EmoteSmileBoldDuotone as EmoteSmileBoldDuotoneIcon, EmoteSmileBoldDuotone as SiEmoteSmileBoldDuotone };
export default EmoteSmileBoldDuotone;
export type { EmoteSmileBoldDuotoneProps };
