import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteGrinFillProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFill = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-grin-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 14a1 1 0 0 0-.8 1.6 6 6 0 0 0 9.6 0A1 1 0 0 0 16 14zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinFill.displayName = 'EmoteGrinFill';

// Triple export pattern (lucide-react style)
export { EmoteGrinFill, EmoteGrinFill as EmoteGrinFillIcon, EmoteGrinFill as SiEmoteGrinFill };
export default EmoteGrinFill;
export type { EmoteGrinFillProps };
